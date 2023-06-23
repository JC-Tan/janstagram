export async function getImages(
  supabase: any,
  userId: string,
  limit: number,
  filterCategory: string
) {
  const { data, error } = await supabase.storage
    .from('images')
    .list(userId + '/', {
      limit: limit,
      offset: 0,
      sortBy: { column: filterCategory, order: 'desc' },
    })

  if (data) {
    return data
  } else {
    return null
  }
}

export function getImgUrl(supabaseUrl: string, userId: string) {
  return supabaseUrl + 'storage/v1/object/public/images/' + userId
}

export function dateSort(a: string, b: string) {
  return Date.parse(b) - Date.parse(a)
}
