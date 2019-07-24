<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'auth'], function () {
    Route::post('login','AuthController@authenticate');
    Route::post('register','AuthController@authenticate');
    Route::get('logout','AuthController@logout');
    Route::get('check','AuthController@check');
});

// session route
Route::post('email-exist',[
    'as' => 'email-exist','uses' => 'Demo\PagesController@emailExist'
]);

// admin route
Route::group(['prefix' => 'admin', 'middleware' => 'api.auth'], function (){

    Route::resource('todos', 'Demo\TodosController');

    Route::post('todos/toggleTodo/{id}', [
        'as' => 'admin.todos.toggle', 'uses' => 'Demo\TodosController@toggleTodo'
    ]);

    Route::group(['prefix' => 'settings'], function () {

        Route::post('/social', [
            'as' => 'admin.settings.social', 'uses' => 'Demo\SettingsController@postSocial'
        ]);
    });

    Route::group(['prefix' => 'users'], function (){

        Route::get('/get',[
            'as' => 'admin.users', 'uses' => 'Demo\PagesController@allUsers'
        ]);

        Route::delete('/{id}',[
            'as' => 'admin.users.delete', 'uses' => 'Demo\PagesController@destroy'
        ]);

    });

    Route::group(['prefix' => 'portfolio'], function (){

        Route::get('/get',[
            'as' => 'admin.portfolio', 'uses' => 'PortfolioController@index'
        ]);

    });
    

});

Route::get('portfolio','PortfolioController@index');
Route::get('portfolio/{id}','PortfolioController@indexid');
Route::post('create-portfolio/','PortfolioController@create');
Route::delete('/delete-portfolio/{id}', 'PortfolioController@delete');


Route::get('program','ProgramController@index');
Route::get('program/{id}','ProgramController@indexid');
Route::get('program-portfolio/{portfolio_id}','ProgramController@getPortfolio');
Route::post('create-program/','ProgramController@create');
Route::delete('/delete-program/{id}', 'ProgramController@delete');


Route::get('project','ProjectController@index');
Route::get('project/{id}','ProjectController@indexid');
Route::get('project-program/{program_id}','ProjectController@getProgram');
Route::post('create-project/','ProjectController@create');
Route::delete('/delete-project/{id}', 'ProjectController@delete');


Route::get('milestone','MilestoneController@index');
Route::get('milestone/{id}','MilestoneController@indexid');
Route::get('milestone-program/{program_id}','MilestoneController@getProject');
Route::post('create-milestone/','MilestoneController@create');
Route::delete('/delete-milestone/{id}', 'MilestoneController@delete');


Route::get('task','TaskController@index');
Route::get('task/{id}','TaskController@indexid');
Route::get('task-project/{program_id}','TaskController@getProject');
Route::post('create-task/','TaskController@create');
Route::delete('/delete-task/{id}', 'TaskController@delete');


Route::get('users','UserController@indexAll');
Route::get('create-users','UserController@create');
