package sample.tomcat.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sample.tomcat.domain.Scene;
import sample.tomcat.domain.USRelation;
import sample.tomcat.repository.*;

import java.util.LinkedList;
import java.util.List;

@Component
public class RelationService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SceneRepository sceneRepository;
    @Autowired
    private PictureRepository pictureRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private USRelationRepository usRelationRepository;
    @Autowired
    private BugRepository bugRepository;

    public void updateFavorRelation(int sceneid, int userid){
        USRelation usrelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        if(usrelation==null) {
            USRelation newusrelation = new USRelation(userid, sceneid);
            newusrelation.setFavor(1);
            usRelationRepository.save(newusrelation);
        }
        else {
            usrelation.setFavor(1);
            usRelationRepository.save(usrelation);
        }
        System.out.println("favor uploaded! ");
    }

    public void updateSceneFavor(int sceneid){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneFavor(scene.getSceneFavor()+1);
        sceneRepository.save(scene);
        System.out.println("favor uploaded! ");
    }

    public void updateVisitedRelation(int sceneid, int userid){
        USRelation usrelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        if(usrelation==null) {
            USRelation newusrelation = new USRelation(userid, sceneid);
            newusrelation.setVisited(1);
            usRelationRepository.save(newusrelation);
        }
        else {
            usrelation.setVisited(1);
            usRelationRepository.save(usrelation);
        }
        System.out.println("visit uploaded! ");
    }

    public void updateSceneVisited(int sceneid){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneVisited(scene.getSceneVisited() + 1);
        sceneRepository.save(scene);
        System.out.println("visit uploaded! ");
    }

    public void updateWishRelation(int sceneid, int userid){
        USRelation usrelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        if(usrelation==null) {
            USRelation newusrelation = new USRelation(userid, sceneid);
            newusrelation.setWish(1);
            usRelationRepository.save(newusrelation);
        }
        else {
            usrelation.setWish(1);
            usRelationRepository.save(usrelation);
        }
        System.out.println("wish uploaded! ");
    }

    public void updateSceneWish(int sceneid){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneWish(scene.getSceneWish() + 1);
        sceneRepository.save(scene);
        System.out.println("wish uploaded! ");
    }

    public boolean checkAlreadyFavor(int sceneid, int userid){
        if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid)!=null)
            if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid).getFavor()==0)
                return false;
            else
                return true;
        else
            return false;
    }

    public boolean checkAlreadyWish(int sceneid, int userid){
        if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid)!=null)
            if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid).getWish()==0)
                return false;
            else
                return true;
        else
            return false;
    }

    public boolean checkAlreadyVisited(int sceneid, int userid){
        if(usRelationRepository.findBySceneIdAndUserId(sceneid,userid)!=null)
            if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid).getVisited()==0)
                return false;
            else
                return true;
        else
            return false;
    }

    public boolean deleteFavor(int sceneid, int userid){
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setFavor(0);
        usRelationRepository.save(usRelation);
        Scene scene = sceneRepository.findBySceneId(sceneid);
        scene.setSceneFavor(scene.getSceneFavor()-1);
        sceneRepository.save(scene);
        System.out.println("favor deleted! ");
        return true;
    }

    public boolean deleteVisited(int sceneid, int userid){
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setVisited(0);
        usRelationRepository.save(usRelation);
        Scene scene = sceneRepository.findBySceneId(sceneid);
        scene.setSceneFavor(scene.getSceneVisited()-1);
        sceneRepository.save(scene);
        System.out.println("visit deleted! ");
        return true;
    }

    public boolean deleteWish(int sceneid, int userid){
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setWish(0);
        usRelationRepository.save(usRelation);
        Scene scene = sceneRepository.findBySceneId(sceneid);
        scene.setSceneFavor(scene.getSceneWish()-1);
        sceneRepository.save(scene);
        System.out.println("wish deleted! ");
        return true;
    }

    public List<Scene> readUser(int userid, String type){
        List<Scene> scenelist = new LinkedList<Scene>();
        List<USRelation> sceneidlist;
        List<Integer> scenes = new LinkedList<Integer>();
        if(type=="favor"){
            sceneidlist = usRelationRepository.findByUserId(userid);
            for(int i = 0,j=0;i<sceneidlist.size();i++ ){
                if(sceneidlist.get(i).getFavor()==1){
                    scenes.add(j,sceneidlist.get(i).getSceneId());
                    j++;
                }
            }
            for(int i = 0;i<scenes.size();i++ ){
                scenelist.add(i,sceneRepository.findBySceneId(scenes.get(i)));
            }
            return scenelist;
        }
        else if(type=="visit"){
            sceneidlist = usRelationRepository.findByUserId(userid);
            for(int i = 0,j=0;i<sceneidlist.size();i++ ){
                if(sceneidlist.get(i).getVisited()==1){
                    scenes.add(j,sceneidlist.get(i).getSceneId());
                    j++;
                }
            }
            for(int i = 0;i<scenes.size();i++ ){
                scenelist.add(i,sceneRepository.findBySceneId(scenes.get(i)));
            }
            return  scenelist;
        }
        else{//wish
            sceneidlist = usRelationRepository.findByUserId(userid);
            for(int i = 0,j=0;i<sceneidlist.size();i++ ){
                if(sceneidlist.get(i).getWish()==1){
                    scenes.add(j,sceneidlist.get(i).getSceneId());
                    j++;
                }
            }
            for(int i = 0;i<scenes.size();i++ ){
                scenelist.add(i,sceneRepository.findBySceneId(scenes.get(i)));
            }
            return scenelist;
        }
    }
}
