package com.tasklist.api.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasklist.api.entity.Task;
import com.tasklist.api.repository.TaskRepository;
import com.tasklist.api.service.TaskService;

@Service
public class TaskServiceImplementation implements TaskService {

	@Autowired
	private TaskRepository repository;
	
	@Override
	public Task createOrUpdate(Task task) {
		return this.repository.save(task);		
	}	

	@Override
	public void delete(long id) {
		this.repository.deleteById(id);		
	}

	@Override
	public List<Task> findAll() {		
		return (List<Task>) this.repository.findAll();
	}

	@Override
	public Task findById(long id) {		
		return this.repository.findById(id).get();		
	}
	
}
