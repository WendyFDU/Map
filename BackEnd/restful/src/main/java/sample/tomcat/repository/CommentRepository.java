package sample.tomcat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.Comment;

import java.util.List;


@RepositoryRestResource
public  interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findBySceneIdOrderByCommentTimeDesc(int sceneid);

    List<Comment> findBySceneIdAndCommentTypeOrderByCommentTimeDesc(int sceneid, int commenttype);

    Comment findBySceneIdAndUserId(int sceneid, int userid);


}
