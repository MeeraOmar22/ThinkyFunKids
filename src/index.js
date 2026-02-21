export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to get the requested file
    let response = await env.ASSETS.fetch(url.pathname);
    
    // If not found and it's not a file (no extension), try index.html
    if (response.status === 404 && !url.pathname.includes('.')) {
      response = await env.ASSETS.fetch('/index.html');
    }
    
    return response;
  },
};
