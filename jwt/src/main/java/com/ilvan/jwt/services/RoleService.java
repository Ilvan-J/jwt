package com.ilvan.jwt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ilvan.jwt.dao.RoleDao;
import com.ilvan.jwt.entity.Role;

@Service
public class RoleService {
    
    @Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
