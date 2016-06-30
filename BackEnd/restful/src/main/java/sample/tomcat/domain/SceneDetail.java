package sample.tomcat.domain;

import java.util.List;

/**
 * Created by ELLCY on 2016/6/30.
 */
public class SceneDetail {

    Scene scene;

    List<Comment> commentlist;

    Picture picture;

    public SceneDetail(){

    }

    public Scene getScene() {
        return scene;
    }

    public void setScene(Scene scene) {
        this.scene = scene;
    }

    public List<Comment> getCommentlist() {
        return commentlist;
    }

    public void setCommentlist(List<Comment> commentlist) {
        this.commentlist = commentlist;
    }

    public Picture getPicture() {
        return picture;
    }

    public void setPicture(Picture picture) {
        this.picture = picture;
    }
}
