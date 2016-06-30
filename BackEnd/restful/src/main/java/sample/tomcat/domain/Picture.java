package sample.tomcat.domain;


import javax.persistence.*;

@Entity
@Table(name = "pics", schema = "test", catalog = "")
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pic_id", nullable = false)
    private int picId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "scene_id", nullable = false)
    private int sceneId;

    @Column(name = "pic_url", nullable = false)
    private String picUrl;

    public Picture(){

    }

    public int getUserId() {
        return userId;
    }

    public int getSceneId() {
        return sceneId;
    }

    public void setSceneId(int sceneId) {
        this.sceneId = sceneId;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public int getPicId() {
        return picId;
    }

    public void setPicId(int picId) {
        this.picId = picId;
    }

    public Picture(int userid, int sceneid, String url){
        this.userId = userid;
        this.sceneId = sceneid;
        this.picUrl = url;

    }

}
