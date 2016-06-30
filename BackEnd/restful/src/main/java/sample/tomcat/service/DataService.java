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

package sample.tomcat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sample.tomcat.domain.*;
import sample.tomcat.repository.*;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.Iterator;
import java.util.List;

@Component
public class DataService {


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


    public User getUsers() {
        System.out.println("test user");
        Iterator<User> users = userRepository.findAll().iterator();
        User user = users.next();
        System.out.println(user.getUserName());
        System.out.println(user.getPassword());
        return user;
    }

    public User login(String username, String password){
        User fuser = userRepository.findByUserNameAndUserPassword(username,password);
        System.out.println("find user "+fuser.getId());
        return fuser;

    }

    public User register(User user){
        User fuser = userRepository.save(user);
        System.out.println("register "+user.getUserName());
        return fuser;
    }

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

    public List<Comment> getCommentByScene(int sceneid){
        List<Comment> comments = commentRepository.findBySceneIdOrderByCommentTimeDesc(1);
        System.out.println("find comments by " + sceneid);
        return comments;
    }

    public List<Comment> getCommentBySceneandType(int sceneid,int commenttype){
        List<Comment> comments = commentRepository.findBySceneIdAndCommentTypeOrderByCommentTimeDesc(sceneid, commenttype);
        System.out.println("find comments by " + sceneid+" and "+ commenttype);
        return comments;
    }

    public Comment uploadComment(Comment comment){
        Comment newcomment = commentRepository.save(comment);
        System.out.println("comment uploaded! ");
        return newcomment;
    }

    public void updateCommentRelation(int sceneid, int score, int userid){
        USRelation usrelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);

        if(usrelation==null) {
            USRelation newusrelation = new USRelation(userid, sceneid);
            newusrelation.setScore(score);
            usRelationRepository.save(newusrelation);
        }
        else {
            usrelation.setScore(score);
            usRelationRepository.save(usrelation);
        }
    }

    public void updateSceneComment(int sceneid, int score){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneScore((scene.getSceneScore()+score)/(scene.getSceneScoreall()+1));
        switch(score) {
            case 1:
                scene.setSceneScore1(scene.getSceneScore1() + 1);
                break;
            case 2:
                scene.setSceneScore2(scene.getSceneScore2() + 1);
                break;
            case 3:
                scene.setSceneScore3(scene.getSceneScore3() + 1);
                break;
            case 4:
                scene.setSceneScore4(scene.getSceneScore4() + 1);
                break;
            case 5:
                scene.setSceneScore5(scene.getSceneScore5() + 1);
                break;
        }
        scene.setSceneScoreall(scene.getSceneScoreall()+1);
        sceneRepository.save(scene);
    }

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
    }

    public void updateSceneFavor(int sceneid){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneFavor(scene.getSceneFavor()+1);
        sceneRepository.save(scene);
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
    }

    public void updateSceneVisited(int sceneid){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneVisited(scene.getSceneVisited() + 1);
        sceneRepository.save(scene);
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
    }

    public void updateSceneWish(int sceneid){
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneWish(scene.getSceneWish() + 1);
        sceneRepository.save(scene);
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

    public boolean checkAlreadyComment(int sceneid, int userid){
        if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid).getScore()==0)
            return false;
        else
            return true;
    }

    public boolean deleteComment(int sceneid, int userid){
        Comment comment = commentRepository.findBySceneIdAndUserId(sceneid, userid);
        int score = comment.getCommentScore();
        commentRepository.delete(comment);
        Scene scene = sceneRepository.findOne(sceneid);
        scene.setSceneScore((scene.getSceneScore()-score)/(scene.getSceneScoreall()-1));
        switch(score) {
            case 1:
                scene.setSceneScore1(scene.getSceneScore1() - 1);
                break;
            case 2:
                scene.setSceneScore2(scene.getSceneScore2() - 1);
                break;
            case 3:
                scene.setSceneScore3(scene.getSceneScore3() - 1);
                break;
            case 4:
                scene.setSceneScore4(scene.getSceneScore4() - 1);
                break;
            case 5:
                scene.setSceneScore5(scene.getSceneScore5() - 1);
                break;
        }
        scene.setSceneScoreall(scene.getSceneScoreall()-1);
        sceneRepository.save(scene);
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setScore(0);
        usRelationRepository.save(usRelation);
        return true;
    }

    public boolean deleteFavor(int sceneid, int userid){
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setFavor(0);
        usRelationRepository.save(usRelation);
        Scene scene = sceneRepository.findBySceneId(sceneid);
        scene.setSceneFavor(scene.getSceneFavor()-1);
        sceneRepository.save(scene);
        return true;
    }

    public boolean deleteVisited(int sceneid, int userid){
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setVisited(0);
        usRelationRepository.save(usRelation);
        Scene scene = sceneRepository.findBySceneId(sceneid);
        scene.setSceneFavor(scene.getSceneVisited()-1);
        sceneRepository.save(scene);
        return true;
    }

    public boolean deleteWish(int sceneid, int userid){
        USRelation usRelation = usRelationRepository.findBySceneIdAndUserId(sceneid, userid);
        usRelation.setWish(0);
        usRelationRepository.save(usRelation);
        Scene scene = sceneRepository.findBySceneId(sceneid);
        scene.setSceneFavor(scene.getSceneWish()-1);
        sceneRepository.save(scene);
        return true;
    }

    public void addBug(Bug bug){
        bugRepository.save(bug);
    }
}
