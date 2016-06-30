package sample.tomcat.domain;


import java.util.List;

public class CommentDetail {

    List<Comment> commentlist;

    int type1;

    int type2;

    public List<Comment> getCommentlist() {
        return commentlist;
    }

    public void setCommentlist(List<Comment> commentlist) {
        this.commentlist = commentlist;
    }

    public int getType1() {
        return type1;
    }

    public void setType1(int type1) {
        this.type1 = type1;
    }

    public int getType2() {
        return type2;
    }

    public void setType2(int type2) {
        this.type2 = type2;
    }

    public CommentDetail(){

    }
}
