/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Projects
// ====================================================

export interface Projects_projects {
  __typename: "Project";
  id: string;
  title: string | null;
  accessibility: boolean | null;
  owner: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Projects {
  projects: (Projects_projects | null)[] | null;
}
