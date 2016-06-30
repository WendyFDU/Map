package sample.tomcat.domain;


import javax.persistence.*;

@Entity
@Table(name = "usrelation", schema = "test", catalog = "")
public class USRelation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "r_id", nullable = false)
    private int rId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "scene_id", nullable = false)
    private int sceneId;

    @Column(name = "score", nullable = false)
    private int score;

    @Column(name = "favor", nullable = false)
    private int favor;

    @Column(name = "visited", nullable = false)
    private int visited;

    @Column(name = "wish", nullable = false)
    private int wish;

    public USRelation(){

    }

    public USRelation(int userid, int sceneid){
        this.userId = userid;
        this.sceneId = sceneid;
        this.favor = 0;
        this.wish = 0;
        this.visited = 0;
        this.score = 0;
    }


    public int getSceneId() {
        return sceneId;
    }

    public void setSceneId(int sceneId) {
        this.sceneId = sceneId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getFavor() {
        return favor;
    }

    public void setFavor(int favor) {
        this.favor = favor;
    }

    public int getVisited() {
        return visited;
    }

    public void setVisited(int visited) {
        this.visited = visited;
    }

    public int getWish() {
        return wish;
    }

    public void setWish(int wish) {
        this.wish = wish;
    }
}
