/*
 * Copyright 2012-2013 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package sample.tomcat.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sample.tomcat.domain.*;
import sample.tomcat.service.DataService;

import java.util.List;

@RequestMapping("/server")
@Controller
public class SampleController {

    @Autowired
    private DataService dataService;



    //用GET方法进行测试，直接在浏览器中打开即可，eg：localhost:8080/server/testuser
    @RequestMapping("/testuser")
    @ResponseBody
    public User testuser() {
        System.out.println("get!");
        return this.dataService.getUsers();
    }


    @RequestMapping("/testcomment")
    @ResponseBody
    public Object testcomment() {
        System.out.println("get!");
        return this.dataService.getCommentByScene(1);
    }

    @RequestMapping("/testscene")
    @ResponseBody
    public List<Scene> testscene() {
        System.out.println("get!");
        return this.dataService.getSceneListByType(1);
    }

    @RequestMapping("/testscenedetail")
    @ResponseBody
    public SceneDetail testscenedetail() {
        System.out.println("get!");
        SceneDetail scenedetail = new SceneDetail();
        try{
            scenedetail.setScene(dataService.getSceneById(1));
            System.out.println(scenedetail.getScene().getSceneName());
            scenedetail.setPicture(dataService.getOnePictureByScene(1));
            System.out.println(scenedetail.getPicture().getPicUrl());
            scenedetail.setCommentlist(dataService.getCommentByScene(1));
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
        return this.dataService.getOnePictureByScene(1);
    }

    @RequestMapping("/testaddfavor")
    @ResponseBody
    public boolean testfavor() {
        System.out.println("favor!");
        System.out.println(this.dataService.checkAlreadyWish(1,4));
        this.dataService.updateWishRelation(1,4);
        return this.dataService.checkAlreadyFavor(1,4);
    }

    @RequestMapping(value="/user/login",  method = RequestMethod.POST)
    @ResponseBody
    public User login( @RequestParam(value = "username") String username, @RequestParam(value = "userpassword") String password) {

        User trueuser;
        System.out.println("POST"+username);
        try{
            trueuser = dataService.login(username,password);
            System.out.println("login successfully!");
        }
        catch(Exception e){
            System.out.println("login fail!");
            return null;
        }
        return trueuser;
    }

    @RequestMapping(value="/user/register",  method = RequestMethod.POST)
    @ResponseBody
    public User register( @RequestParam(value = "username") String username, @RequestParam(value = "userpassword") String password,
                          @RequestParam(value = "userface") String userface, @RequestParam(value = "userintro") String userintro) {

        User user = new User(username,password,userface,userintro);
        User trueuser;
        System.out.println("POST"+username);
        try{
            trueuser = dataService.register(user);
            System.out.println("register successfully!");
        }
        catch(Exception e){
            System.out.println("register fail!");
            return null;
        }
        return trueuser;
    }

    @RequestMapping(value="/scene/list/type", method = RequestMethod.POST)
    @ResponseBody
    public List<Scene> sceneListByType(@RequestParam(value = "scenetype") int scenetype){

        System.out.println("POST"+scenetype);
        List<Scene> scenelist;
        try{
            scenelist = dataService.getSceneListByType(scenetype);
            System.out.println("get scene list successfully!");
        }
        catch(Exception e){
            System.out.println("nothing!");
            return null;
        }
        return scenelist;
    }

    @RequestMapping(value="/scene/detail", method = RequestMethod.POST)
    @ResponseBody
    public SceneDetail sceneDetailById(@RequestParam(value = "sceneid") int sceneid){

        System.out.println("POST"+sceneid);
        SceneDetail scenedetail = new SceneDetail();
        try{
            scenedetail.setScene(dataService.getSceneById(sceneid));
            scenedetail.setPicture(dataService.getOnePictureByScene(sceneid));
            scenedetail.setCommentlist(dataService.getCommentByScene(sceneid));
            System.out.println("get scene detail successfully!");
        }
        catch(Exception e){
            System.out.println("nothing!");
            return null;
        }
        return scenedetail;
    }

    @RequestMapping(value="/comment/detail", method = RequestMethod.POST)
    @ResponseBody
    public CommentDetail commentDetailByIdAndType(@RequestParam(value = "sceneid") int sceneid,@RequestParam(value = "commenttype") int commenttype){

        System.out.println("POST"+sceneid);
        CommentDetail commentdetail = new CommentDetail();
        try{
            commentdetail.setType1(dataService.getCommentBySceneandType(sceneid, 1).size());
            commentdetail.setType2(dataService.getCommentBySceneandType(sceneid, 2).size());

            if(commenttype==1)
            {
                commentdetail.setCommentlist(dataService.getCommentBySceneandType(sceneid,1));
            }
            else{
                commentdetail.setCommentlist(dataService.getCommentBySceneandType(sceneid,2));
            }
            System.out.println("get comment detail successfully!");
        }
        catch(Exception e){
            System.out.println("nothing!");
            return null;
        }
        return commentdetail;
    }

    //提交评价
    @RequestMapping(value="/comment/upload",  method = RequestMethod.POST)
    @ResponseBody
    public Comment uploadComment( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid,
                          @RequestParam(value = "score") int score, @RequestParam(value = "content") String content,
                          @RequestParam(value = "commenttype") int commenttype) {

        Comment comment = new Comment(content,sceneid, userid,score,commenttype);
        Comment newcomment = new Comment();
        System.out.println("POST"+content);
        try{
            if(dataService.checkAlreadyComment(sceneid,userid))
                return newcomment;
            newcomment = dataService.uploadComment(comment);
            dataService.updateCommentRelation(sceneid, score,userid);
            dataService.updateSceneComment(sceneid, score);
            System.out.println("comment successfully!");
        }
        catch(Exception e){
            System.out.println("comment fail!");
            return null;
        }
        return newcomment;
    }

    //加入收藏
    @RequestMapping(value="/user/favor",  method = RequestMethod.POST)
    @ResponseBody
    public int favor( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST"+userid);
        try{
            if(dataService.checkAlreadyFavor(sceneid,userid))
                return 1;
            dataService.updateFavorRelation(sceneid, userid);
            dataService.updateSceneFavor(sceneid);
            System.out.println("favor successfully!");
        }
        catch(Exception e){
            System.out.println("favor fail!");
        }
        return 0;

    }

    //加入足迹
    @RequestMapping(value="/user/visited",  method = RequestMethod.POST)
    @ResponseBody
    public int visited( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST"+userid);
        try{
            if(dataService.checkAlreadyVisited(sceneid,userid))
                return 1;
            dataService.updateVisitedRelation(sceneid, userid);
            dataService.updateSceneVisited(sceneid);
            System.out.println("visited successfully!");
        }
        catch(Exception e){
            System.out.println("visited fail!");
        }
            return 0;
    }

    //加入心愿
    @RequestMapping(value="/user/wish",  method = RequestMethod.POST)
    @ResponseBody
    public int wish( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST"+userid);
        try{
            if(dataService.checkAlreadyWish(sceneid,userid))
                return 1;
            dataService.updateWishRelation(sceneid, userid);
            dataService.updateSceneWish(sceneid);
            System.out.println("wish successfully!");
        }
        catch(Exception e){
            System.out.println("wish fail!");
        }
        return 0;
    }

    //删除评论
    @RequestMapping(value="/comment/delete",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteComment( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE comment");
        try{
            if(dataService.checkAlreadyComment(sceneid,userid)){
                return dataService.deleteComment(sceneid,userid);
            }
            System.out.println("comment deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }

    //删除收藏
    @RequestMapping(value="/favor/delete",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteFavor( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE favor");
        try{
            if(dataService.checkAlreadyFavor(sceneid, userid)){
                return dataService.deleteFavor(sceneid, userid);
            }
            System.out.println("favor deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }

    //删除足迹
    @RequestMapping(value="/visited/delete",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteVisited( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE visited");
        try{
            if(dataService.checkAlreadyVisited(sceneid, userid)){
                return dataService.deleteVisited(sceneid, userid);
            }
            System.out.println("visited deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }

    //删除心愿
    @RequestMapping(value="/wish/delete",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteWish( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE wish");
        try{
            if(dataService.checkAlreadyWish(sceneid, userid)){
                return dataService.deleteWish(sceneid, userid);
            }
            System.out.println("wish deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }


    //报错
    @RequestMapping(value="/bug/report",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean bugReport( @RequestParam(value = "bugcontent") String bugcontent) {

        System.out.println("bug!!!!!!!");
        Bug bug = new Bug(bugcontent);
        try{
            dataService.addBug(bug);
            System.out.println("report successfully!");
        }
        catch(Exception e){
            System.out.println("report fail!");
        }
        return false;
    }

}
