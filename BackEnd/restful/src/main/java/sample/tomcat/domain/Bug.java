package sample.tomcat.domain;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "bugs", schema = "test", catalog = "")
public class Bug {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bug_id", nullable = false)
    private int bugId;

    @Column(name = "bug_time", nullable = false)
    private Date bugTime;

    @Column(name = "bug_content", nullable = false)
    private String bugContent;

    public Bug(){

    }

    public Bug(String bugContent){
        this.bugContent = bugContent;
        this.bugTime = new java.sql.Date(new java.util.Date().getTime());
    }

    public String getBugContent() {
        return bugContent;
    }

    public void setBugContent(String bugContent) {
        this.bugContent = bugContent;
    }

    public Date getBugTime() {
        return bugTime;
    }

    public void setBugTime(Date bugTime) {
        this.bugTime = bugTime;
    }
}
