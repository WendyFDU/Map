package sample.tomcat.domain;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "tags", schema = "test", catalog = "")

public class Tag {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "tag_id", nullable = false)
    private int tagId;

    @Column(name = "scene_id", nullable = false)
    private int sceneId;

    @Column(name = "tagbt_id", nullable = false)
    private int tagbtId;

    @Column(name = "tag_type", nullable = false)
    private int tagType;

    @Column(name = "tag_times", nullable = false)
    private int tagTimes;

    @Column(name = "tag_content", nullable = false)
    private String tagContent;

    Tag(){

    }

    public Tag(String content, int sceneId, int sceneType, int tagid){
        this.tagType = sceneType;
        this.tagContent = content;
        this.sceneId = sceneId;
        this.tagbtId = tagid;
        this.tagTimes = 0;
    }

    public int getTagbtId() {
        return tagbtId;
    }

    public void setTagbtId(int tagId) {
        this.tagbtId = tagId;
    }

    public int getSceneId() {
        return sceneId;
    }

    public void setSceneId(int sceneId) {
        this.sceneId = sceneId;
    }

    public String getTagContent() {
        return tagContent;
    }

    public void setTagContent(String tagContent) {
        this.tagContent = tagContent;
    }

    public int getTagTimes() {
        return tagTimes;
    }

    public void setTagTimes(int tagTimes) {
        this.tagTimes = tagTimes;
    }

    public void setTagType(int tagType) {
        this.tagType = tagType;
    }
}
