package sample.tomcat.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sample.tomcat.domain.Picture;
import sample.tomcat.domain.Scene;
import sample.tomcat.domain.SceneDetail;
import sample.tomcat.domain.Tag;
import sample.tomcat.service.CommentService;
import sample.tomcat.service.SceneService;
import sample.tomcat.service.UserService;

import java.util.List;

@RequestMapping("/server")
@Controller
public class SceneController {

    @Autowired
    private SceneService sceneService;
    @Autowired
    private CommentService commentService;

    //按类型读取景点
    @RequestMapping(value = "/scene/list/type", method = RequestMethod.POST)
    @ResponseBody
    public List<Scene> sceneListByType(@RequestParam(value = "scenetype") int scenetype) {

        System.out.println("POST" + scenetype);
        List<Scene> scenelist;
        try {
            scenelist = sceneService.getSceneListByType(scenetype);
            System.out.println("get scene list successfully!");
        } catch (Exception e) {
            System.out.println("nothing!");
            return null;
        }
        return scenelist;
    }

    //按类型读取景点得到景点个数
    @RequestMapping(value = "/scene/list/type/number", method = RequestMethod.POST)
    @ResponseBody
    public int sceneListByTypeNumber(@RequestParam(value = "scenetype") int scenetype) {

        System.out.println("POST" + scenetype);
        List<Scene> scenelist;
        try {
            scenelist = sceneService.getSceneListByType(scenetype);
            System.out.println("get scene list successfully!");
        } catch (Exception e) {
            System.out.println("nothing!");
            return 0;
        }
        return scenelist.size();
    }

    //读取景点详细信息
    @RequestMapping(value = "/scene/detail", method = RequestMethod.POST)
    @ResponseBody
    public SceneDetail sceneDetailById(@RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST" + sceneid);
        SceneDetail scenedetail = new SceneDetail();
        try {
            scenedetail.setScene(sceneService.getSceneById(sceneid));
            scenedetail.setPicture(sceneService.getOnePictureByScene(sceneid));
            scenedetail.setCommentlist(commentService.getCommentByScene(sceneid));
            System.out.println("get scene detail successfully!");
        } catch (Exception e) {
            System.out.println("nothing!");
            return null;
        }
        return scenedetail;
    }

    //读取景点所有图片
    @RequestMapping(value = "/scene/picture", method = RequestMethod.POST)
    @ResponseBody
    public List<Picture> getPictureByScene( @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST" + sceneid);
        List<Picture> piclist;
        try {
            piclist = sceneService.getPictureByScene(sceneid);
            System.out.println("get pic list successfully!");
        } catch (Exception e) {
            System.out.println("nothing!");
            return null;
        }
        return piclist;
    }

    //获取tag
    @RequestMapping(value = "/tag/type", method = RequestMethod.POST)
    @ResponseBody
    public List<Tag> tagListByType(@RequestParam(value = "tagtype") int tagtype,
                                   @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST" + tagtype);
        List<Tag> taglist;
        try {
            taglist = sceneService.findTagByType(tagtype,sceneid);
            System.out.println("get tag list successfully!");
        } catch (Exception e) {
            System.out.println("nothing!");
            return null;
        }
        return taglist;
    }

    //添加tag
    @RequestMapping(value = "/tag/new", method = RequestMethod.POST)
    @ResponseBody
    public boolean addTag(@RequestParam(value = "tagtype") int tagtype, @RequestParam(value = "tagid") int tagid,
                          @RequestParam(value = "tagcontent") String tagcontent, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("POST" + tagtype);
        Tag tag = new Tag(tagcontent, sceneid, tagtype, tagid);
        Tag checktag;
        try {
            checktag = sceneService.checkTag(sceneid, tagid);
            if (checktag != null) {
                checktag.setTagTimes(checktag.getTagTimes() + 1);
                sceneService.addtag(checktag);
            } else {
                tag.setTagTimes(1);
                sceneService.addtag(tag);
            }
            System.out.println("tag added successfully!");
        } catch (Exception e) {
            System.out.println("add fail!");
        }
        return false;

    }

}
