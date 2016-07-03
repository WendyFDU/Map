package sample.tomcat.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sample.tomcat.domain.Picture;
import sample.tomcat.domain.Scene;
import sample.tomcat.domain.Tag;
import sample.tomcat.repository.*;

import java.util.Iterator;
import java.util.List;

@Component
public class SceneService {

    @Autowired
    private SceneRepository sceneRepository;
    @Autowired
    private PictureRepository pictureRepository;
    @Autowired
    private TagResitory tagResitory;


    public List<Scene> getSceneListByType(int scenetype){
        List<Scene> SceneListByType = sceneRepository.findBySceneType(scenetype);
        System.out.println("find scene list by type "+scenetype+" : " + SceneListByType.size());
        return SceneListByType;
    }

    public Scene getSceneById(int sceneid){
        Scene scene = sceneRepository.findBySceneId(sceneid);
        System.out.println("find scene by " + sceneid);
        return scene;
    }



    public Picture getOnePictureByScene(int sceneid){
        Iterator<Picture> pics = pictureRepository.findBySceneId(sceneid).iterator();
        Picture pic = pics.next();
        System.out.println("find one picture by " + sceneid);
        return pic;
    }

    public List<Picture> getPictureByScene(int sceneid){
        List<Picture> pics = pictureRepository.findBySceneId(sceneid);
        System.out.println("find pictures by " + sceneid);
        return pics;
    }


    public void newPicture(int sceneid,int userid, String imgurl,String info){
        Picture picture = new Picture(sceneid,userid,imgurl,info);
        pictureRepository.save(picture);
        System.out.println("new pic! ");
    }

    public List<Scene> searching(int scenetype, String keyword, int searchtype){
        List<Scene> sceneList;
        System.out.println("search： "+keyword);
        if(searchtype==1){
            sceneList = sceneRepository.findBySceneNameContaining(keyword);
            for(int i = 0; i<sceneList.size();){
                System.out.println(sceneList.get(i).getSceneName());
                if(sceneList.get(i).getSceneType()!=scenetype) {
                    System.out.println(sceneList.get(i).getSceneName());
                    sceneList.remove(i);
                }
                else
                    i++;
            }
            return sceneList;
        }
        else{
            sceneList = sceneRepository.findBySceneNameContaining(keyword);
            for(int i = 0; i<sceneList.size();i++){
                System.out.println(sceneList.get(i).getSceneName());
            }
            return sceneList;
        }
    }

    public List<Tag> findTagByType(int tagtype, int sceneid){
        List<Tag> tagList;
        System.out.println("search by "+tagtype);
        tagList = tagResitory.findByTagTypeAndSceneId(tagtype,sceneid);
        return tagList;
    }

    public void addtag(Tag tag){
        System.out.println("new tag "+tag.getTagContent());
        tagResitory.save(tag);
    }

    public Tag checkTag(int sceneid, int tagid){
        System.out.println("check tag ");
        Tag tag =tagResitory.findBySceneIdAndTagId(sceneid, tagid);
        if(tag!=null)
            return tag;
        else return null;
    }

}
