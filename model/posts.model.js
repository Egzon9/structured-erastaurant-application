class PostsModel {
    createNewPost(postData) {
      return new Promise((resolve, reject) => {
        process.firebase
          .firestore()
          .collection("posts")
          .add(postData)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  
    getAllPosts() {
      return new Promise((resolve, reject) => {
        process.firebase
          .firestore()
          .collection("posts")
          .get()
          .then((docArray) => {
            let data = [];
            docArray.forEach((document) => {
              data.push({
                id: document.id,
                ...document.data(),
              });
            });
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  
    deletePost(id) {
      return new Promise((resolve, reject) => {
        process.firebase
          .firestore()
          .collection("posts")
          .doc(id)
          .delete()
          .then((payload) => {
            resolve(payload);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  
  
    updatePost(postId, postData) {
      const partialPost = {
        title: postData.title,
        text: postData.text,
      };
  
      return new Promise((resolve, reject) => {
        process.firebase
          .firestore()
          .collection("posts")
          .doc(postId)
          .update(partialPost)
          .then(() => {
            resolve({ message: "Posts successfully saved!" });
          })
          .catch((error) => {
            reject(error);
          });
      });
    };
};
  
module.exports = PostsModel;