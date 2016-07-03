package sample.tomcat.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.Tag;

import java.util.List;

@RepositoryRestResource
public interface TagResitory extends JpaRepository<Tag, Integer> {

    List<Tag> findByTagTypeAndSceneId(int tagtype,int sceneid);

    Tag findBySceneIdAndTagId(int sceneid, int tagid);

}
