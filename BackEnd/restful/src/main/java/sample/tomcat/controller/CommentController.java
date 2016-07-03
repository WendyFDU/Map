package sample.tomcat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sample.tomcat.domain.Comment;
import sample.tomcat.domain.CommentDetail;
import sample.tomcat.service.CommentService;
import sample.tomcat.service.RelationService;
import sample.tomcat.service.UserService;


@RequestMapping("/server")
@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;


    //读取评论详细信息
    @RequestMapping(value="/comment/detail", method = RequestMethod.POST)
    @ResponseBody
    public CommentDetail commentDetailByIdAndType(@RequestParam(value = "sceneid") int sceneid,@RequestParam(value = "commenttype") int commenttype){

        System.out.println("POST"+sceneid);
        CommentDetail commentdetail = new CommentDetail();
        try{
            commentdetail.setType1(commentService.getCommentBySceneandType(sceneid, 1).size());
            commentdetail.setType2(commentService.getCommentBySceneandType(sceneid, 2).size());

            if(commenttype==1)
            {
                commentdetail.setCommentlist(commentService.getCommentBySceneandType(sceneid,1));
            }
            else{
                commentdetail.setCommentlist(commentService.getCommentBySceneandType(sceneid,2));
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
    @RequestMapping(value="/comment/newone",  method = RequestMethod.POST)
    @ResponseBody
    public Comment uploadComment( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid,
                                  @RequestParam(value = "score") int score, @RequestParam(value = "content") String content,
                                  @RequestParam(value = "commenttype") int commenttype) {

        Comment comment = new Comment(content,sceneid, userid,score,commenttype);
        Comment newcomment = new Comment();
        System.out.println("POST"+content);
        try{
            if(commentService.checkAlreadyComment(sceneid,userid))
                return newcomment;
            if(comment.getCommentContent()!=null)
                newcomment = commentService.uploadComment(comment);
            commentService.updateCommentRelation(sceneid, score,userid);
            commentService.updateSceneComment(sceneid, score);
            System.out.println("comment successfully!");
        }
        catch(Exception e){
            System.out.println("comment fail!");
            return null;
        }
        return newcomment;
    }

    //删除评论
    @RequestMapping(value="/comment/deleting",  method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteComment( @RequestParam(value = "userid") int userid, @RequestParam(value = "sceneid") int sceneid) {

        System.out.println("DELETE comment");
        try{
            if(commentService.checkAlreadyComment(sceneid,userid)){
                return commentService.deleteComment(sceneid,userid);
            }
            System.out.println("comment deleted successfully!");
        }
        catch(Exception e){
            System.out.println("delete fail!");
        }
        return false;
    }
}
