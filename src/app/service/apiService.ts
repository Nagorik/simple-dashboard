const basUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchData(url: string): Promise<any> {
    const response = await fetch(basUrl+url);
    const data = await response.json();
    return data;
}
 
export async function getPostById(id: string): Promise<any> {
    const response = await fetch(`${basUrl}posts/${id}`);;
    console.log(response);
    const data = await response.json();
    return data;
}

export async function getUsers(): Promise<any> {
    const response = await fetch(basUrl+'users');
    const data = await response.json();
    return data;
}

export async function getComments(): Promise<any> {
    const response = await fetch(basUrl+'comments');
    const data = await response.json();
    return data;
}