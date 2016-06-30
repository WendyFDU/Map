package sample.tomcat.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.Picture;

import java.util.List;

@RepositoryRestResource
public interface PictureRepository extends JpaRepository<Picture, Integer> {

    List<Picture> findBySceneId(int sceneid);
}
