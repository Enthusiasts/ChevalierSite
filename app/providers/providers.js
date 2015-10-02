/**
 * Created by DeBalid on 06.06.2015.
 */
'use strict'; //TODO: �����������, ����� ��� ������.

//����� ���� ���� �����-�� �����������, ���������� �������� �������� � ��������� �������.
//��������� ���������� ����� ���������� ���� ��������� ������ (����� ���� �� ������ ���������� ��������).
//���������� = ������� + ������� + ��������� + ��������; ��� ��� - ���������.
//� ��� ����� ���������� � ��������� ���������� ����� dependencies.
angular.module('chevalierApp.providers', ['ngResource'])
    //�� ���� �������, ���������� resource-�������, � ������� ����� ���������� ����� �����.
    .factory('dataFactory', function($resource) {
        var api = 'http://95.213.194.21:8080';
        return {
            api: api,
            //������ ����� � �����.
            remadeMedia: function (media) {return api + "/media/" + media},
            teachers: $resource('./data/teacher.json', {}, { //� ������� ����� ��������� �� Beast
                query: {method: 'GET', params: {}, isArray: false}
            }),
            files: $resource('./data/file.json', {}, { //����������, ����� ��������� �� Beast
                query: {method: 'GET', params: {}, isArray: false}
            }),
            university: $resource(api + '/university/', {}, {
                all: {url: api + '/university/all/:count', method: 'GET', params: {}, isArray: false}
            })
        }
    })