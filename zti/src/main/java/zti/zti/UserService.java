package zti.zti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public boolean login(User user){
        for(User user1 :userRepository.findAll())
        {
            if(user.getEmail().equals(user1.getEmail()) && user.getPassword().equals(user1.getPassword()))
                return true;
        }
        return  false;
    }
}
