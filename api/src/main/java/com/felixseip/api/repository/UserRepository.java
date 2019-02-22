package com.felixseip.api.repository;

import com.felixseip.api.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.userName = :userName")
    User getUserByUserName(final String userName);

    @Query("SELECT u FROM User u WHERE u.email = :email")
    User getUserByEmail(final String email);
}
