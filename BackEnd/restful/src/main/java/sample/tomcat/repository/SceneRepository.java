package sample.tomcat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.Scene;

import java.util.List;

@RepositoryRestResource
public interface SceneRepository extends JpaRepository<Scene, Integer> {

    List<Scene> findBySceneType(int scenetype);

    Scene findBySceneId(int sceneid);

}