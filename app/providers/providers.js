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
        return {
            teachers: $resource('./data/teacher.json', {}, { //� ������� ����� ��������� �� Beast
                query: {method: 'GET', params: {}, isArray: false}
            }),
            files: $resource('./data/file.json', {}, { //����������, ����� ��������� �� Beast
                query: {method: 'GET', params: {}, isArray: false}
            })
        }
    })