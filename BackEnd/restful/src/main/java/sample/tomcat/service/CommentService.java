package sample.tomcat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sample.tomcat.domain.Comment;
import sample.tomcat.domain.Scene;
import sample.tomcat.domain.USRelation;
import sample.tomcat.repository.*;

import java.util.List;


@Component
public class CommentService {


    @Autowired
    private SceneRepository sceneRepository;
    @Autowired
    private PictureRepository pictureRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private USRelationRepository usRelationRepository;

    public List<Comment> getCommentByScene(int sceneid){
        List<Comment> comments = commentRepository.findBySceneIdOrderByCommentTimeDesc(sceneid);
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
        System.out.println("comment uploaded! ");
    }

    public void updateSceneComment(int sceneid, int score){
        Scene scene = sceneRepository.findOne(sceneid);
        double a = scene.getSceneScore()+score;
        double b = scene.getSceneScoreall()+1;
        scene.setSceneScore(a/b);
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
        System.out.println("comment uploaded! ");
    }

    public boolean checkAlreadyComment(int sceneid, int userid){
        if(usRelationRepository.findBySceneIdAndUserId(sceneid, userid)==null||usRelationRepository.findBySceneIdAndUserId(sceneid, userid).getScore()==0)
            return false;
        else
            return true;
    }

    public boolean deleteComment(int sceneid, int userid){
        Comment comment = commentRepository.findBySceneIdAndUserId(sceneid, userid);
        int score = comment.getCommentScore();
        commentRepository.delete(comment);
        Scene scene = sceneRepository.findOne(sceneid);
        double a = scene.getSceneScore()-score;
        double b = scene.getSceneScoreall()-1;
        scene.setSceneScore(a/b);
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
        System.out.println("comment deleted! ");
        return true;
    }

}
