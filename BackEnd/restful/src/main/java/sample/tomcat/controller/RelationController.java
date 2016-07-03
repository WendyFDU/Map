package sample.tomcat.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sample.tomcat.domain.Scene;
import sample.tomcat.service.RelationService;

import java.util.List;

@RequestMapping("/server")
@Controller
public class RelationController {

    @Autowired
    private RelationService relationService;

    //加入收藏
    @RequestMapping(value="/favor/new",  method = RequestMethod.POST)
    @ResponseBody
    public int favor( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST"+userid);
        try{
            if(relationService.checkAlreadyFavor(sceneid,userid))
                return 1;
            relationService.updateFavorRelation(sceneid, userid);
            relationService.updateSceneFavor(sceneid);
            System.out.println("favor successfully!");
        }
        catch(Exception e){
            System.out.println("favor fail!");
        }
        return 0;

    }

    //加入足迹
    @RequestMapping(value="/visit/new",  method = RequestMethod.POST)
    @ResponseBody
    public int visited( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST"+userid);
        try{
            if(relationService.checkAlreadyVisited(sceneid,userid))
                return 1;
            relationService.updateVisitedRelation(sceneid, userid);
            relationService.updateSceneVisited(sceneid);
            System.out.println("visited successfully!");
        }
        catch(Exception e){
            System.out.println("visited fail!");
        }
        return 0;
    }

    //加入心愿
    @RequestMapping(value="/wish/new",  method = RequestMethod.POST)
    @ResponseBody
    public int wish( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST"+userid);
        try{
            if(relationService.checkAlreadyWish(sceneid,userid))
                return 1;
            relationService.updateWishRelation(sceneid, userid);
            relationService.updateSceneWish(sceneid);
            System.out.println("wish successfully!");
        }
        catch(Exception e){
            System.out.println("wish fail!");
        }
        return 0;
    }

    //删除收藏
    @RequestMapping(value="/favor/deleting",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteFavor( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE favor");
        try{
            if(relationService.checkAlreadyFavor(sceneid, userid)){
                return relationService.deleteFavor(sceneid, userid);
            }
            System.out.println("favor deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }

    //删除足迹
    @RequestMapping(value="/visit/deleting",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteVisited( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE visited");
        try{
            if(relationService.checkAlreadyVisited(sceneid, userid)){
                return relationService.deleteVisited(sceneid, userid);
            }
            System.out.println("visited deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }

    //删除心愿
    @RequestMapping(value="/wish/deleting",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteWish( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE wish");
        try{
            if(relationService.checkAlreadyWish(sceneid, userid)){
                return relationService.deleteWish(sceneid, userid);
            }
            System.out.println("wish deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }

    //读取用户收藏
    @RequestMapping(value="/user/favor",  method = RequestMethod.POST)
    @ResponseBody
    public List<Scene> readUserFavor(@RequestParam(value = "userid") int userid){
        System.out.println("reading...");
        List<Scene> scenelist;
        try{
            scenelist = relationService.readUser(userid, "favor");
            System.out.println("read successfully!");
            return scenelist;
        }
        catch(Exception e){
            System.out.println("read fail!");
            return null;
        }

    }

    //读取用户足迹
    @RequestMapping(value="/user/visit",  method = RequestMethod.POST)
    @ResponseBody
    public List<Scene> readUserVisit(@RequestParam(value = "userid") int userid){
        System.out.println("reading...");
        List<Scene> scenelist;
        try{
            scenelist = relationService.readUser(userid, "visit");
            System.out.println("read successfully!");
            return scenelist;
        }
        catch(Exception e){
            System.out.println("read fail!");
            return null;
        }

    }

    //读取用户心愿
    @RequestMapping(value="/user/wish",  method = RequestMethod.POST)
    @ResponseBody
    public List<Scene> readUserWish(@RequestParam(value = "userid") int userid){
        System.out.println("reading...");
        List<Scene> scenelist;
        try{
            scenelist = relationService.readUser(userid, "wish");
            System.out.println("read successfully!");
            return scenelist;
        }
        catch(Exception e){
            System.out.println("read fail!");
            return null;
        }

    }
}
