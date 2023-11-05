export async function getPost(id: number) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json())

  return data.body
}
