import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  icons = [
    {
      iconPath: 'assets/Icons/spring-boot.svg',
      name: 'Spring boot',
      backShadow: 'back-shadow-spring',
    },
    {
      iconPath: 'assets/Icons/angular.svg',
      name: 'Angular',
      backShadow: 'back-shadow-angular',
    },
    {
      iconPath: 'assets/Icons/react.svg',
      name: 'React',
      backShadow: 'back-shadow-react',
    },

    {
      iconPath: 'assets/Icons/html.svg',
      name: 'HTML',
      backShadow: 'back-shadow-html',
    },

    {
      iconPath: 'assets/Icons/css.svg',
      name: 'CSS',
      backShadow: 'back-shadow-css',
    },

    {
      iconPath: 'assets/Icons/js.svg',
      name: 'JavaScript',
      backShadow: 'back-shadow-js',
    },

    {
      iconPath: 'assets/Icons/ts.svg',
      name: 'TypeScript',
      backShadow: 'back-shadow-ts',
    },

    {
      iconPath: 'assets/Icons/redux.svg',
      name: 'Redux',
      backShadow: 'back-shadow-redux',
    },

    {
      iconPath: 'assets/Icons/java.svg',
      name: 'Java',
      backShadow: 'back-shadow-java',
    },

    {
      iconPath: 'assets/Icons/nodejs.svg',
      name: 'NodeJS',
      backShadow: 'back-shadow-nodejs',
    },

    {
      iconPath: 'assets/Icons/mysql.svg',
      name: 'MySQL',
      backShadow: 'back-shadow-mysql',
    },

    {
      iconPath: 'assets/Icons/git.svg',
      name: 'Git',
      backShadow: 'back-shadow-git',
    },

    {
      iconPath: 'assets/Icons/jenkins.svg',
      name: 'Jenkins',
      backShadow: 'back-shadow-jenkins',
    },

    {
      iconPath: 'assets/Icons/jira.svg',
      name: 'Jira',
      backShadow: 'back-shadow-jira',
    },

    {
      iconPath: 'assets/Icons/notion.svg',
      name: 'Notion',
      backShadow: 'back-shadow-notion',
    },

    {
      iconPath: 'assets/Icons/docker.svg',
      name: 'Docker',
      backShadow: 'back-shadow-docker',
    },

    {
      iconPath: 'assets/Icons/aws.svg',
      name: 'AWS',
      backShadow: 'back-shadow-aws',
    },

    {
      iconPath: 'assets/Icons/azure.svg',
      name: 'Azure',
      backShadow: 'back-shadow-azure',
    },
  ];
}
