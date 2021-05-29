const PostsModel = require('../model/posts.modelgit');
const pm = new PostsModel();

class PostsController {

    addNewPost(post) {
        return pm.createNewPost(post);
    }

    fetchAllPosts() {
        return pm.getAllPosts();
    }

    deletePost(id) {
        return pm.deletePost(id);
    }

    updatePost(id, body) {
        return pm.updatePost(id, body);
    }

}

module.exports = PostsController;