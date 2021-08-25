import service from '../util/request'

// 获取文章列表
function getArticleList() {
    return service.get(`/api/articles`);
};
function delArticle(id: string) {
    return service.delete(`/api/articles/${id}`);
};
function addArticle(data: any) {
    return service.post(`/api/articles`, data);
};
function editArticle(id: any, data: any) {
    return service.put(`/api/articles/${id}`, data);
};                                                                              
function getArticleData(id: any) {
    return service.get(`/api/articles/${id}`);
};


export default { getArticleList, delArticle, addArticle, editArticle, getArticleData }
      