package com.felixseip.api.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "users")
public class User implements Serializable {
    private static final long serialVersionUID = 2580475499853075111L;

    @Id
    @Column(name = "userId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private final long id;

    @Column(name = "userName")
    private final String userName;

    @Column(name = "email")
    private final String email;

    public User(final long id, final String user, final String email) {
        this.id = id;
        this.userName = user;
        this.email = email;
    }
}
