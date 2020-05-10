module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCheckList {
  count: Int!
}

type AggregateJournalEntries {
  count: Int!
}

type AggregateLabel {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CheckList {
  id: ID!
  itemName: String!
  completed: Boolean!
}

type CheckListConnection {
  pageInfo: PageInfo!
  edges: [CheckListEdge]!
  aggregate: AggregateCheckList!
}

input CheckListCreateInput {
  id: ID
  itemName: String!
  completed: Boolean!
}

type CheckListEdge {
  node: CheckList!
  cursor: String!
}

enum CheckListOrderByInput {
  id_ASC
  id_DESC
  itemName_ASC
  itemName_DESC
  completed_ASC
  completed_DESC
}

type CheckListPreviousValues {
  id: ID!
  itemName: String!
  completed: Boolean!
}

type CheckListSubscriptionPayload {
  mutation: MutationType!
  node: CheckList
  updatedFields: [String!]
  previousValues: CheckListPreviousValues
}

input CheckListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckListWhereInput
  AND: [CheckListSubscriptionWhereInput!]
  OR: [CheckListSubscriptionWhereInput!]
  NOT: [CheckListSubscriptionWhereInput!]
}

input CheckListUpdateInput {
  itemName: String
  completed: Boolean
}

input CheckListUpdateManyMutationInput {
  itemName: String
  completed: Boolean
}

input CheckListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  itemName: String
  itemName_not: String
  itemName_in: [String!]
  itemName_not_in: [String!]
  itemName_lt: String
  itemName_lte: String
  itemName_gt: String
  itemName_gte: String
  itemName_contains: String
  itemName_not_contains: String
  itemName_starts_with: String
  itemName_not_starts_with: String
  itemName_ends_with: String
  itemName_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  AND: [CheckListWhereInput!]
  OR: [CheckListWhereInput!]
  NOT: [CheckListWhereInput!]
}

input CheckListWhereUniqueInput {
  id: ID
}

scalar DateTime

type JournalEntries {
  id: ID!
  createdAt: DateTime
  entryName: String!
  entryDetails: String!
}

type JournalEntriesConnection {
  pageInfo: PageInfo!
  edges: [JournalEntriesEdge]!
  aggregate: AggregateJournalEntries!
}

input JournalEntriesCreateInput {
  id: ID
  entryName: String!
  entryDetails: String!
}

type JournalEntriesEdge {
  node: JournalEntries!
  cursor: String!
}

enum JournalEntriesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  entryName_ASC
  entryName_DESC
  entryDetails_ASC
  entryDetails_DESC
}

type JournalEntriesPreviousValues {
  id: ID!
  createdAt: DateTime
  entryName: String!
  entryDetails: String!
}

type JournalEntriesSubscriptionPayload {
  mutation: MutationType!
  node: JournalEntries
  updatedFields: [String!]
  previousValues: JournalEntriesPreviousValues
}

input JournalEntriesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JournalEntriesWhereInput
  AND: [JournalEntriesSubscriptionWhereInput!]
  OR: [JournalEntriesSubscriptionWhereInput!]
  NOT: [JournalEntriesSubscriptionWhereInput!]
}

input JournalEntriesUpdateInput {
  entryName: String
  entryDetails: String
}

input JournalEntriesUpdateManyMutationInput {
  entryName: String
  entryDetails: String
}

input JournalEntriesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  entryName: String
  entryName_not: String
  entryName_in: [String!]
  entryName_not_in: [String!]
  entryName_lt: String
  entryName_lte: String
  entryName_gt: String
  entryName_gte: String
  entryName_contains: String
  entryName_not_contains: String
  entryName_starts_with: String
  entryName_not_starts_with: String
  entryName_ends_with: String
  entryName_not_ends_with: String
  entryDetails: String
  entryDetails_not: String
  entryDetails_in: [String!]
  entryDetails_not_in: [String!]
  entryDetails_lt: String
  entryDetails_lte: String
  entryDetails_gt: String
  entryDetails_gte: String
  entryDetails_contains: String
  entryDetails_not_contains: String
  entryDetails_starts_with: String
  entryDetails_not_starts_with: String
  entryDetails_ends_with: String
  entryDetails_not_ends_with: String
  AND: [JournalEntriesWhereInput!]
  OR: [JournalEntriesWhereInput!]
  NOT: [JournalEntriesWhereInput!]
}

input JournalEntriesWhereUniqueInput {
  id: ID
}

type Label {
  id: ID!
  labelName: String!
}

type LabelConnection {
  pageInfo: PageInfo!
  edges: [LabelEdge]!
  aggregate: AggregateLabel!
}

input LabelCreateInput {
  id: ID
  labelName: String!
}

type LabelEdge {
  node: Label!
  cursor: String!
}

enum LabelOrderByInput {
  id_ASC
  id_DESC
  labelName_ASC
  labelName_DESC
}

type LabelPreviousValues {
  id: ID!
  labelName: String!
}

type LabelSubscriptionPayload {
  mutation: MutationType!
  node: Label
  updatedFields: [String!]
  previousValues: LabelPreviousValues
}

input LabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LabelWhereInput
  AND: [LabelSubscriptionWhereInput!]
  OR: [LabelSubscriptionWhereInput!]
  NOT: [LabelSubscriptionWhereInput!]
}

input LabelUpdateInput {
  labelName: String
}

input LabelUpdateManyMutationInput {
  labelName: String
}

input LabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  labelName: String
  labelName_not: String
  labelName_in: [String!]
  labelName_not_in: [String!]
  labelName_lt: String
  labelName_lte: String
  labelName_gt: String
  labelName_gte: String
  labelName_contains: String
  labelName_not_contains: String
  labelName_starts_with: String
  labelName_not_starts_with: String
  labelName_ends_with: String
  labelName_not_ends_with: String
  AND: [LabelWhereInput!]
  OR: [LabelWhereInput!]
  NOT: [LabelWhereInput!]
}

input LabelWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCheckList(data: CheckListCreateInput!): CheckList!
  updateCheckList(data: CheckListUpdateInput!, where: CheckListWhereUniqueInput!): CheckList
  updateManyCheckLists(data: CheckListUpdateManyMutationInput!, where: CheckListWhereInput): BatchPayload!
  upsertCheckList(where: CheckListWhereUniqueInput!, create: CheckListCreateInput!, update: CheckListUpdateInput!): CheckList!
  deleteCheckList(where: CheckListWhereUniqueInput!): CheckList
  deleteManyCheckLists(where: CheckListWhereInput): BatchPayload!
  createJournalEntries(data: JournalEntriesCreateInput!): JournalEntries!
  updateJournalEntries(data: JournalEntriesUpdateInput!, where: JournalEntriesWhereUniqueInput!): JournalEntries
  updateManyJournalEntrieses(data: JournalEntriesUpdateManyMutationInput!, where: JournalEntriesWhereInput): BatchPayload!
  upsertJournalEntries(where: JournalEntriesWhereUniqueInput!, create: JournalEntriesCreateInput!, update: JournalEntriesUpdateInput!): JournalEntries!
  deleteJournalEntries(where: JournalEntriesWhereUniqueInput!): JournalEntries
  deleteManyJournalEntrieses(where: JournalEntriesWhereInput): BatchPayload!
  createLabel(data: LabelCreateInput!): Label!
  updateLabel(data: LabelUpdateInput!, where: LabelWhereUniqueInput!): Label
  updateManyLabels(data: LabelUpdateManyMutationInput!, where: LabelWhereInput): BatchPayload!
  upsertLabel(where: LabelWhereUniqueInput!, create: LabelCreateInput!, update: LabelUpdateInput!): Label!
  deleteLabel(where: LabelWhereUniqueInput!): Label
  deleteManyLabels(where: LabelWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  projectName: String!
  description: String!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  projectName: String!
  description: String!
  tasks: TaskCreateManyWithoutProjectsInput
}

input ProjectCreateManyWithoutTasksInput {
  create: [ProjectCreateWithoutTasksInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateWithoutTasksInput {
  id: ID
  projectName: String!
  description: String!
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  projectName_ASC
  projectName_DESC
  description_ASC
  description_DESC
}

type ProjectPreviousValues {
  id: ID!
  projectName: String!
  description: String!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  projectName: String
  projectName_not: String
  projectName_in: [String!]
  projectName_not_in: [String!]
  projectName_lt: String
  projectName_lte: String
  projectName_gt: String
  projectName_gte: String
  projectName_contains: String
  projectName_not_contains: String
  projectName_starts_with: String
  projectName_not_starts_with: String
  projectName_ends_with: String
  projectName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  projectName: String
  description: String
  tasks: TaskUpdateManyWithoutProjectsInput
}

input ProjectUpdateManyDataInput {
  projectName: String
  description: String
}

input ProjectUpdateManyMutationInput {
  projectName: String
  description: String
}

input ProjectUpdateManyWithoutTasksInput {
  create: [ProjectCreateWithoutTasksInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutTasksInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateWithoutTasksDataInput {
  projectName: String
  description: String
}

input ProjectUpdateWithWhereUniqueWithoutTasksInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutTasksDataInput!
}

input ProjectUpsertWithWhereUniqueWithoutTasksInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutTasksDataInput!
  create: ProjectCreateWithoutTasksInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  projectName: String
  projectName_not: String
  projectName_in: [String!]
  projectName_not_in: [String!]
  projectName_lt: String
  projectName_lte: String
  projectName_gt: String
  projectName_gte: String
  projectName_contains: String
  projectName_not_contains: String
  projectName_starts_with: String
  projectName_not_starts_with: String
  projectName_ends_with: String
  projectName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  checkList(where: CheckListWhereUniqueInput!): CheckList
  checkLists(where: CheckListWhereInput, orderBy: CheckListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckList]!
  checkListsConnection(where: CheckListWhereInput, orderBy: CheckListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckListConnection!
  journalEntries(where: JournalEntriesWhereUniqueInput!): JournalEntries
  journalEntrieses(where: JournalEntriesWhereInput, orderBy: JournalEntriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JournalEntries]!
  journalEntriesesConnection(where: JournalEntriesWhereInput, orderBy: JournalEntriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JournalEntriesConnection!
  label(where: LabelWhereUniqueInput!): Label
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label]!
  labelsConnection(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LabelConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  node(id: ID!): Node
}

type Subscription {
  checkList(where: CheckListSubscriptionWhereInput): CheckListSubscriptionPayload
  journalEntries(where: JournalEntriesSubscriptionWhereInput): JournalEntriesSubscriptionPayload
  label(where: LabelSubscriptionWhereInput): LabelSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
}

type Task {
  id: ID!
  taskName: String!
  taskDetails: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  id: ID
  taskName: String!
  taskDetails: String!
  projects: ProjectCreateManyWithoutTasksInput
}

input TaskCreateManyWithoutProjectsInput {
  create: [TaskCreateWithoutProjectsInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateWithoutProjectsInput {
  id: ID
  taskName: String!
  taskDetails: String!
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  taskName_ASC
  taskName_DESC
  taskDetails_ASC
  taskDetails_DESC
}

type TaskPreviousValues {
  id: ID!
  taskName: String!
  taskDetails: String!
}

input TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  taskName: String
  taskName_not: String
  taskName_in: [String!]
  taskName_not_in: [String!]
  taskName_lt: String
  taskName_lte: String
  taskName_gt: String
  taskName_gte: String
  taskName_contains: String
  taskName_not_contains: String
  taskName_starts_with: String
  taskName_not_starts_with: String
  taskName_ends_with: String
  taskName_not_ends_with: String
  taskDetails: String
  taskDetails_not: String
  taskDetails_in: [String!]
  taskDetails_not_in: [String!]
  taskDetails_lt: String
  taskDetails_lte: String
  taskDetails_gt: String
  taskDetails_gte: String
  taskDetails_contains: String
  taskDetails_not_contains: String
  taskDetails_starts_with: String
  taskDetails_not_starts_with: String
  taskDetails_ends_with: String
  taskDetails_not_ends_with: String
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  taskName: String
  taskDetails: String
  projects: ProjectUpdateManyWithoutTasksInput
}

input TaskUpdateManyDataInput {
  taskName: String
  taskDetails: String
}

input TaskUpdateManyMutationInput {
  taskName: String
  taskDetails: String
}

input TaskUpdateManyWithoutProjectsInput {
  create: [TaskCreateWithoutProjectsInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutProjectsInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutProjectsInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateWithoutProjectsDataInput {
  taskName: String
  taskDetails: String
}

input TaskUpdateWithWhereUniqueWithoutProjectsInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutProjectsDataInput!
}

input TaskUpsertWithWhereUniqueWithoutProjectsInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutProjectsDataInput!
  create: TaskCreateWithoutProjectsInput!
}

input TaskWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  taskName: String
  taskName_not: String
  taskName_in: [String!]
  taskName_not_in: [String!]
  taskName_lt: String
  taskName_lte: String
  taskName_gt: String
  taskName_gte: String
  taskName_contains: String
  taskName_not_contains: String
  taskName_starts_with: String
  taskName_not_starts_with: String
  taskName_ends_with: String
  taskName_not_ends_with: String
  taskDetails: String
  taskDetails_not: String
  taskDetails_in: [String!]
  taskDetails_not_in: [String!]
  taskDetails_lt: String
  taskDetails_lte: String
  taskDetails_gt: String
  taskDetails_gte: String
  taskDetails_contains: String
  taskDetails_not_contains: String
  taskDetails_starts_with: String
  taskDetails_not_starts_with: String
  taskDetails_ends_with: String
  taskDetails_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}
`
      }
    