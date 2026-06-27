import { supabase } from "../lib/supabase";

export async function getMenu() {
    const { data, error } = await supabase.from("menu").select("*");

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}