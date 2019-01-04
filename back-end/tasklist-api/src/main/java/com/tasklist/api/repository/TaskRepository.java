package com.tasklist.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.tasklist.api.entity.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {
	
}
