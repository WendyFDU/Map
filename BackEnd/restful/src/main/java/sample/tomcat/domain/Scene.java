package sample.tomcat.domain;

import javax.persistence.*;

@Entity
@Table(name = "scenes", schema = "test", catalog = "")
//@NamedQuery(name = "Scene.findBySceneNameLike",
//        query = "select u from scenes u where u.scene_name like %keyword%")
public class Scene {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "scene_id", nullable = false)
    private int sceneId;

    @Column(name = "scene_name", nullable = false)
    private String sceneName;

    @Column(name = "scene_visited")
    private int sceneVisited;

    @Column(name = "scene_score")
    private double sceneScore;

    @Column(name = "scene_favor")
    private int sceneFavor;

    @Column(name = "scene_wish")
    private int sceneWish;

    @Column(name = "scene_intro")
    private String sceneIntro;

    @Column(name = "scene_type")
    private int sceneType;

    @Column(name = "scene_x")
    private double sceneX;

    @Column(name = "scene_y")
    private double sceneY;

    @Column(name = "scene_score1")
    private int sceneScore1;

    @Column(name = "scene_score2")
    private int sceneScore2;

    @Column(name = "scene_score3")
    private int sceneScore3;

    @Column(name = "scene_score4")
    private int sceneScore4;

    @Column(name = "scene_score5")
    private int sceneScore5;

    @Column(name = "scene_scoreall")
    private int sceneScoreall;

    @Column(name = "scene_detail")
    private String sceneDetail;


    public Scene(){

    }

    public String getSceneName() {
        return sceneName;
    }

    public void setSceneName(String sceneName) {
        this.sceneName = sceneName;
    }

    public int getSceneVisited() {
        return sceneVisited;
    }

    public void setSceneVisited(int sceneVisited) {
        this.sceneVisited = sceneVisited;
    }

    public double getSceneScore() {
        return sceneScore;
    }

    public void setSceneScore(double sceneScore) {
        this.sceneScore = sceneScore;
    }

    public int getSceneFavor() {
        return sceneFavor;
    }

    public void setSceneFavor(int sceneFavor) {
        this.sceneFavor = sceneFavor;
    }

    public int getSceneWish() {
        return sceneWish;
    }

    public void setSceneWish(int sceneWish) {
        this.sceneWish = sceneWish;
    }

    public String getSceneIntro() {
        return sceneIntro;
    }

    public void setSceneIntro(String sceneIntro) {
        this.sceneIntro = sceneIntro;
    }

    public int getSceneId() {
        return sceneId;
    }

    public int getSceneType() {
        return sceneType;
    }

    public double getSceneX() {
        return sceneX;
    }

    public void setSceneX(double sceneX) {
        this.sceneX = sceneX;
    }

    public double getSceneY() {
        return sceneY;
    }

    public void setSceneY(double sceneY) {
        this.sceneY = sceneY;
    }

    public int getSceneScore1() {
        return sceneScore1;
    }

    public void setSceneScore1(int sceneScore1) {
        this.sceneScore1 = sceneScore1;
    }

    public int getSceneScore2() {
        return sceneScore2;
    }

    public void setSceneScore2(int sceneScore2) {
        this.sceneScore2 = sceneScore2;
    }

    public int getSceneScore3() {
        return sceneScore3;
    }

    public void setSceneScore3(int sceneScore3) {
        this.sceneScore3 = sceneScore3;
    }

    public int getSceneScore4() {
        return sceneScore4;
    }

    public void setSceneScore4(int sceneScore4) {
        this.sceneScore4 = sceneScore4;
    }

    public int getSceneScore5() {
        return sceneScore5;
    }

    public void setSceneScore5(int sceneScore5) {
        this.sceneScore5 = sceneScore5;
    }

    public int getSceneScoreall() {
        return sceneScoreall;
    }

    public void setSceneScoreall(int sceneScoreall) {
        this.sceneScoreall = sceneScoreall;
    }

    public String getSceneDetail() {
        return sceneDetail;
    }

    public void setSceneDetail(String sceneDetail) {
        this.sceneDetail = sceneDetail;
    }

    public void setSceneType(int sceneType) {
        this.sceneType = sceneType;
    }
}
