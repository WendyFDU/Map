package sample.tomcat.domain;

import javax.persistence.*;

/**
 * Created by ELLCY on 2016/6/9.
 */

@Entity
@Table(name = "users", schema = "test", catalog = "")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_password", nullable = false)
    private String userPassword;

    @Column(name = "user_face", nullable = false)
    private String userFace;

    @Column(name = "user_intro", nullable = false)
    private String userIntro;

    public User(){

    }

    public User( String username, String user_password,String face, String intro){
        this.userName = username;
        this.userPassword = user_password;
        this.userFace = face;
        this.userIntro = intro;
    }

    public int getId(){
        return userId;
    }

//    public void setId(int id){
//        this.userId = id;
//    }

    public String getUserName(){
        return userName;
    }

    public void setUserName(String name){
        this.userName = name;
    }

    public String getPassword(){
        return userPassword;
    }

    public void setPassword(String user_password){
        this.userPassword = user_password;
    }

    public void setUserFace(String face){
        this.userFace = face;
    }

    public String getUserFace(){
        return userFace;
    }

    public void setUserIntro(String intro){
        this.userIntro = intro;
    }

    public String getUserIntro(){
        return userIntro;
    }
}