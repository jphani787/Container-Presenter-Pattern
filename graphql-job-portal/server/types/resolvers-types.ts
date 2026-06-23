import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Job, JobType } from '@prisma/client';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: unknown; output: unknown; }
};

export type ApplyToJobInput = {
  __typename?: 'ApplyToJobInput';
  id: Scalars['ID']['output'];
};

export type CancelApplicationInput = {
  __typename?: 'CancelApplicationInput';
  id: Scalars['ID']['output'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateJobInput = {
  __typename?: 'CreateJobInput';
  companyName: Scalars['String']['output'];
  description: Scalars['String']['output'];
  location: Scalars['String']['output'];
  remote: Scalars['Boolean']['output'];
  salary: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: JobType;
};

export type DeleteJobInput = {
  __typename?: 'DeleteJobInput';
  id: Scalars['ID']['output'];
};

export type Job = {
  __typename?: 'Job';
  company: Company;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isApplied: Scalars['Boolean']['output'];
  location: Scalars['String']['output'];
  remote: Scalars['Boolean']['output'];
  salary: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: JobType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum JobType {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME',
  Internship = 'INTERNSHIP',
  PartTime = 'PART_TIME',
  Temporary = 'TEMPORARY',
  Volunteer = 'VOLUNTEER'
}

export type LoginInput = {
  __typename?: 'LoginInput';
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  applyToJob: Scalars['Boolean']['output'];
  cancelApplication: Scalars['Boolean']['output'];
  createJob: Job;
  deleteJob: Scalars['Boolean']['output'];
  login: User;
  logout: Scalars['Boolean']['output'];
  signup: User;
};


export type MutationApplyToJobArgs = {
  input: ApplyToJobInput;
};


export type MutationCancelApplicationArgs = {
  input: CancelApplicationInput;
};


export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


export type MutationDeleteJobArgs = {
  input: DeleteJobInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  searchJobs: Array<Job>;
};


export type QuerySearchJobsArgs = {
  input: SearchJobsInput;
};

export type SearchJobsInput = {
  __typename?: 'SearchJobsInput';
  query: Scalars['String']['output'];
};

export type SignupInput = {
  __typename?: 'SignupInput';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: UserRole;
};

export type User = {
  __typename?: 'User';
  appliedJobs: Array<Job>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ownedJobs: Array<Job>;
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ApplyToJobInput: ResolverTypeWrapper<Partial<ApplyToJobInput>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
  CancelApplicationInput: ResolverTypeWrapper<Partial<CancelApplicationInput>>;
  Company: ResolverTypeWrapper<Partial<Company>>;
  CreateJobInput: ResolverTypeWrapper<Partial<Omit<CreateJobInput, 'type'> & { type: ResolversTypes['JobType'] }>>;
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']['output']>>;
  DeleteJobInput: ResolverTypeWrapper<Partial<DeleteJobInput>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']['output']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
  Job: ResolverTypeWrapper<Job>;
  JobType: ResolverTypeWrapper<JobType>;
  LoginInput: ResolverTypeWrapper<Partial<LoginInput>>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  SearchJobsInput: ResolverTypeWrapper<Partial<SearchJobsInput>>;
  SignupInput: ResolverTypeWrapper<Partial<SignupInput>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
  User: ResolverTypeWrapper<Partial<Omit<User, 'appliedJobs' | 'ownedJobs'> & { appliedJobs: Array<ResolversTypes['Job']>, ownedJobs: Array<ResolversTypes['Job']> }>>;
  UserRole: ResolverTypeWrapper<Partial<UserRole>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ApplyToJobInput: Partial<ApplyToJobInput>;
  Boolean: Partial<Scalars['Boolean']['output']>;
  CancelApplicationInput: Partial<CancelApplicationInput>;
  Company: Partial<Company>;
  CreateJobInput: Partial<CreateJobInput>;
  DateTime: Partial<Scalars['DateTime']['output']>;
  DeleteJobInput: Partial<DeleteJobInput>;
  ID: Partial<Scalars['ID']['output']>;
  Int: Partial<Scalars['Int']['output']>;
  Job: Job;
  LoginInput: Partial<LoginInput>;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  SearchJobsInput: Partial<SearchJobsInput>;
  SignupInput: Partial<SignupInput>;
  String: Partial<Scalars['String']['output']>;
  User: Partial<Omit<User, 'appliedJobs' | 'ownedJobs'> & { appliedJobs: Array<ResolversParentTypes['Job']>, ownedJobs: Array<ResolversParentTypes['Job']> }>;
};

export type ApplyToJobInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ApplyToJobInput'] = ResolversParentTypes['ApplyToJobInput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type CancelApplicationInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CancelApplicationInput'] = ResolversParentTypes['CancelApplicationInput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreateJobInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateJobInput'] = ResolversParentTypes['CreateJobInput']> = {
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  remote?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  salary?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['JobType'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteJobInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteJobInput'] = ResolversParentTypes['DeleteJobInput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type JobResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isApplied?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  remote?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  salary?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['JobType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type JobTypeResolvers = EnumResolverSignature<{ CONTRACT?: any, FULL_TIME?: any, INTERNSHIP?: any, PART_TIME?: any, TEMPORARY?: any, VOLUNTEER?: any }, ResolversTypes['JobType']>;

export type LoginInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LoginInput'] = ResolversParentTypes['LoginInput']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  applyToJob?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationApplyToJobArgs, 'input'>>;
  cancelApplication?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCancelApplicationArgs, 'input'>>;
  createJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationCreateJobArgs, 'input'>>;
  deleteJob?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteJobArgs, 'input'>>;
  login?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  signup?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'input'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  searchJobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QuerySearchJobsArgs, 'input'>>;
};

export type SearchJobsInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SearchJobsInput'] = ResolversParentTypes['SearchJobsInput']> = {
  query?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type SignupInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignupInput'] = ResolversParentTypes['SignupInput']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  appliedJobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedJobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  ApplyToJobInput?: ApplyToJobInputResolvers<ContextType>;
  CancelApplicationInput?: CancelApplicationInputResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CreateJobInput?: CreateJobInputResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteJobInput?: DeleteJobInputResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobType?: JobTypeResolvers;
  LoginInput?: LoginInputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchJobsInput?: SearchJobsInputResolvers<ContextType>;
  SignupInput?: SignupInputResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

