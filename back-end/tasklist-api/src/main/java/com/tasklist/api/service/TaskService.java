package com.tasklist.api.service;

import java.util.List;

import com.tasklist.api.entity.Task;

public interface TaskService {
	
	Task createOrUpdate(Task task);	
	
	void delete(long id);
	
	Task findById(long id);
	
	List<Task> findAll();
	
}
