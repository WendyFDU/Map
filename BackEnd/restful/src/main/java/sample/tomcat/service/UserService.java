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
import java.util.*;

@Component
public class UserService {


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

    public void addBug(Bug bug){
        bugRepository.save(bug);
    }



    public User newUserFace(int userid, String face){
        User user = userRepository.getOne(userid);
        user.setUserFace(face);
        userRepository.save(user);
        System.out.println("new face! ");
        return user;
    }

}
