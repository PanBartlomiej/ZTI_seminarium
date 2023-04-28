package zti.zti;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
public class UserController {

    @Autowired
    UserService userService;
    @GetMapping(path = "/data")
    public List<User> getUsers(){
       return userService.getUsers();
    }

    @PostMapping(path = "/login",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.TEXT_PLAIN_VALUE)
    public String login(@RequestBody User user){
        if(userService.login(user))
            return "ok";
        else return "fail";
    }
}
