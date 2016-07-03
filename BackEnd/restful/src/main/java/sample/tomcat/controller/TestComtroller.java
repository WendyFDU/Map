package sample.tomcat.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import sample.tomcat.domain.*;
import sample.tomcat.service.CommentService;
import sample.tomcat.service.RelationService;
import sample.tomcat.service.SceneService;
import sample.tomcat.service.UserService;

import java.util.List;

@RequestMapping("/server")
@Controller
public class TestComtroller {

    @Autowired
    private UserService userService;
    @Autowired
    private SceneService sceneService;
    @Autowired
    private RelationService relationService;
    @Autowired
    private CommentService commentService;

    //以下都是测试

    //用GET方法进行测试，直接在浏览器中打开即可，eg：localhost:8080/server/testuser


    @RequestMapping("/testuser")
    @ResponseBody
    public User testuser() {
        System.out.println("get!");
        return this.userService.getUsers();
    }

    @RequestMapping("/testgetfavor")
    @ResponseBody
    public List<Scene> testgetfavor() {
        System.out.println("get!");
        return this.relationService.readUser(1,"favor");
    }

    @RequestMapping("/testcomment")
    @ResponseBody
    public Object testcomment() {
        System.out.println("get!");
        return this.commentService.getCommentByScene(1);
    }

    @RequestMapping("/testscene")
    @ResponseBody
    public List<Scene> testscene() {
        System.out.println("get!");
        return this.sceneService.getSceneListByType(1);
    }

    @RequestMapping("/testscenedetail")
    @ResponseBody
    public SceneDetail testscenedetail() {
        System.out.println("get!");
        SceneDetail scenedetail = new SceneDetail();
        try{
            scenedetail.setScene(sceneService.getSceneById(1));
            System.out.println(scenedetail.getScene().getSceneName());
            scenedetail.setPicture(sceneService.getOnePictureByScene(1));
            System.out.println(scenedetail.getPicture().getPicUrl());
            scenedetail.setCommentlist(commentService.getCommentByScene(1));
            System.out.println(scenedetail.getCommentlist().get(0).getCommentContent());
            System.out.println("get scene detail successfully!");
        }
        catch(Exception e){
            System.out.println("nothing!");
            return null;
        }
        return scenedetail;
    }

    @RequestMapping("/testpicture")
    @ResponseBody
    public Picture testpic() {
        System.out.println("get!");
        return this.sceneService.getOnePictureByScene(1);
    }

    @RequestMapping("/testaddfavor")
    @ResponseBody
    public boolean testfavor() {
        System.out.println("favor!");
        System.out.println(this.relationService.checkAlreadyWish(1,4));
        this.relationService.updateWishRelation(1,4);
        return this.relationService.checkAlreadyFavor(1,4);
    }

    @RequestMapping("/testaddpicture")
         @ResponseBody
         public void testaddpic() {
        System.out.println("get!");
        this.sceneService.newPicture(12,1,"aaazzz","aza");
    }

    //搜素
    @RequestMapping("/testuserface")
    @ResponseBody
    public void testuserface() {
        System.out.println("get!");
        this.userService.newUserFace(1,"zxcvbnm");
    }

    @RequestMapping("/testsearch")
    @ResponseBody
    public List<Scene> testsearch() {
        System.out.println("get!");
        return this.sceneService.searching(1,"张",0);
    }

    @RequestMapping("/testnewcomment")
    @ResponseBody
    public void testnewcomment() {
//String content, int sceneid, int userid, int score, int type
        Comment comment = new Comment("yoo",3, 4,3,1);
        Comment newcomment = new Comment();
        System.out.println("POST"+null);
//int sceneid, int userid
            if(commentService.checkAlreadyComment(4,3))
                System.out.println("no");
            if(comment.getCommentContent()!=null)
                newcomment = commentService.uploadComment(comment);
            commentService.updateCommentRelation(4, 3,3);
        //int sceneid, int score
            commentService.updateSceneComment(4, 3);
            System.out.println("comment successfully!");

    }

    @RequestMapping("/testnewtag")
    @ResponseBody
    public void testnewtag() {

        System.out.println("POST" + 1);
        Tag tag = new Tag("健身", 3, 3, 4);
        Tag checktag;

            checktag = sceneService.checkTag(3, 7);
            if (checktag != null) {
                checktag.setTagTimes(checktag.getTagTimes() + 1);
                sceneService.addtag(checktag);
            } else {
                tag.setTagTimes(1);
                sceneService.addtag(tag);
            }
            System.out.println("tag added successfully!");


    }

}
