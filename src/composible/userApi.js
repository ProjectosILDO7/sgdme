import userAuthUser from "./userAuthUser";
import userSupabase from "boot/supabase";
import { v4 as uuid } from "uuid";
import { ref } from "vue";
import useBrand from "src/composible/useBrand.js";
import { useQuasar } from "quasar";

const brand = ref({
  name: "",
  phone: "",
  primary: "",
  secondary: "",
});
export default function userApi() {
  const { user } = userAuthUser();
  const $q = useQuasar();
  const fileName = uuid();
  const { supabase } = userSupabase();
  const { setBrand } = useBrand();

  const list = async (table) => {
    const { data, error } = await supabase.from(table).select();
    if (error) throw error;
    return data;
  };

  const getFuncionariosWithCategoriasAndEscolas = async (tabela) => {
    const { data, error } = await supabase.from(tabela).select(`
      id,
      *,
      escolas (id, nome), categorias (id, categoria)
    `);
    if (error) throw error;
    return data;
  };

  const fetchCount = async (table, userId) => {
    const { data, error, count } = await supabase
      .from(table)
      .select("*", { count: "exact" })
      .eq("user_id", userId);
    if (error) throw error;
    return {
      data,
      count,
    };
  };

  const getById = async (table, id) => {
    const { data, error } = await supabase.from(table).select().eq("id", id);
    if (error) throw error;
    return data[0];
  };
  const post = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .insert({ ...form, user_id: user.value.id });
    if (error) throw error;
    return data;
  };
  const update = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .update({ ...form })
      .match({ id: form.id });

    if (error) throw error;
    return data;
  };
  const remove = async (table, id) => {
    const { data, error } = await supabase.from(table).delete().match({ id });

    if (error) throw error;
    return data;
  };

  // Ûploud de Imagens
  const uploadImage = async (file, storage) => {
    const { data, error } = await supabase.storage
      .from(storage)
      .upload(fileName, file, {
        cacheControl: 3600,
        upsert: false,
      });

    const publicURL = await getImagUrl(fileName, storage);
    if (error) throw error;
    return publicURL;
  };

  // Pega a Url da Imagem
  const getImagUrl = async (fileName, storage) => {
    const { data, error } = await supabase.storage
      .from(storage)
      .getPublicUrl(fileName);
    if (error) throw error;
    console.log(data.publicUrl);
    return data.publicUrl;
  };

  const getBrand = async () => {
    const id = user?.value?.id;
    if (id) {
      $q.loading.show();
      const { data, error } = await supabase
        .from("config")
        .select("*")
        .eq("user_id", id);

      if (error) throw error;
      if (data.length > 0) {
        (brand.value = data[0]),
          setBrand(brand.value.primary, brand.value.secondary);
      }
      $q.loading.hide();
      return brand;
    }
  };

  return {
    list,
    getById,
    post,
    uploadImage,
    update,
    remove,
    fileName,
    getBrand,
    brand,
    getFuncionariosWithCategoriasAndEscolas,
    fetchCount,
  };
}
