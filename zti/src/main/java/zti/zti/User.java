package zti.zti;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "user1")
public class User {


    @Id
    public int id;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @Column(name ="email")
    public String email;
    @Column(name= "password")
    public String password;
}
