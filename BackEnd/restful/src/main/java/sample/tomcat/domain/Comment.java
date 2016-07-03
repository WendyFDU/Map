package sample.tomcat.domain;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "comments", schema = "test", catalog = "")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "comment_id", nullable = false)
    private int commentId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "scene_id", nullable = false)
    private int sceneId;

    @Column(name = "comment_score", nullable = false)
    private int commentScore;

    @Column(name = "comment_content")
    private String commentContent;

    @Column(name = "comment_type", nullable = false)
    private int commentType;

    @Column(name = "comment_time", nullable = false)
    private Date commentTime;

    public Comment(){

    }

    public Comment(String content, int sceneid, int userid, int score, int type){
        this.commentContent = content;
        this.userId = userid;
        this.sceneId = sceneid;
        this.commentScore = score;
        this.commentType = type;
        this.commentTime = new java.sql.Date(new java.util.Date().getTime());
    }

    public int getCommentId() {
        return commentId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getSceneId() {
        return sceneId;
    }

    public void setSceneId(int sceneId) {
        this.sceneId = sceneId;
    }

    public int getCommentScore() {
        return commentScore;
    }

    public void setCommentScore(int commentScore) {
        this.commentScore = commentScore;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public int getCommentType() {
        return commentType;
    }

    public void setCommentType(int commentType) {
        this.commentType = commentType;
    }
}
