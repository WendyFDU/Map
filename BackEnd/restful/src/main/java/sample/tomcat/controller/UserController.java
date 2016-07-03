package sample.tomcat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sample.tomcat.domain.*;
import sample.tomcat.service.SceneService;
import sample.tomcat.service.UserService;

import java.util.List;

@RequestMapping("/server")
@Controller
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private SceneService sceneService;


    //登录
    @RequestMapping(value="/user/logining",  method = RequestMethod.POST)
    @ResponseBody
    public User login( @RequestParam(value = "username") String username, @RequestParam(value = "userpassword") String password) {

        User trueuser;
        System.out.println("POST"+username);
        try{
            trueuser = userService.login(username,password);
            System.out.println("login successfully!");
        }
        catch(Exception e){
            System.out.println("login fail!");
            return null;
        }
        return trueuser;
    }

    //注册
    @RequestMapping(value="/user/registering",  method = RequestMethod.POST)
    @ResponseBody
    public User register( @RequestParam(value = "username") String username, @RequestParam(value = "userpassword") String password,
                          @RequestParam(value = "userface") String userface, @RequestParam(value = "userintro") String userintro) {

        User user = new User(username,password,userface,userintro);
        User trueuser;
        System.out.println("POST"+username);
        try{
            trueuser = userService.register(user);
            System.out.println("register successfully!");
        }
        catch(Exception e){
            System.out.println("register fail!");
            return null;
        }
        return trueuser;
    }

    //写入用户头像
    @RequestMapping(value="/user/face/newone",  method = RequestMethod.POST)
    @ResponseBody
    public User newUserFace(@RequestParam(value = "userid") int userid,@RequestParam(value = "userface") String userface){
        System.out.println("new face!");
        User user;
        try{
            user = userService.newUserFace(userid, userface);
            System.out.println("new face successfully!");
            return user;
        }
        catch(Exception e){
            System.out.println("new fail!");
            return null;
        }

    }

    //写入图片
    @RequestMapping(value="/picture/newone",  method = RequestMethod.POST)
    @ResponseBody
    public void newPicture(@RequestParam(value = "sceneid") int sceneid,@RequestParam(value = "userid") int userid,
                           @RequestParam(value = "imgurl") String imgurl,@RequestParam(value = "picinfo") String info){
        System.out.println("new picture!");
        Picture picture;
        try{
            sceneService.newPicture(sceneid,userid,imgurl,info);
            System.out.println("new pic successfully!");
        }
        catch(Exception e){
            System.out.println("new fail!");
        }

    }

    //搜索
    @RequestMapping(value="/scene/searching",  method = RequestMethod.POST)
    @ResponseBody
    public List<Scene> searching(@RequestParam(value = "scenetype") int scenetype,@RequestParam(value = "keyword") String keyword,@RequestParam(value = "searchtype") int searchtype){
        System.out.println("searching!");
        List<Scene>  scenelist;
        try{
            scenelist = sceneService.searching(scenetype,keyword,searchtype);
            System.out.println("search successfully!");
            return scenelist;
        }
        catch(Exception e){
            System.out.println("search fail!");
            return null;
        }
    }


    //报错
    @RequestMapping(value="/bug/report",  method = RequestMethod.POST)
    @ResponseBody
    public boolean bugReport( @RequestParam(value = "bugcontent") String bugcontent) {

        System.out.println("bug!!!!!!!");
        Bug bug = new Bug(bugcontent);
        try{
            userService.addBug(bug);
            System.out.println("report successfully!");
        }
        catch(Exception e){
            System.out.println("report fail!");
        }
        return false;
    }

}
