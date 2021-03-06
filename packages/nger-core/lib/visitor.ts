import { NullAstVisitor, ClassAst, Visitors, ParserAstContext, ConstructorAst, PropertyAst, MethodAst } from 'ims-decorator';
import {
    // classes
    isComponentClassAst, ComponentClassAst,
    isDirectiveClassAst, DirectiveClassAst,
    isPipeClassAst, PipeClassAst,
    isNgModuleClassAst, NgModuleClassAst,
    isInjectableClassAst, InjectableClassAst,
    isPageClassAst, PageClassAst,
    // property
    isContentChildPropertyAst, ContentChildPropertyAst,
    isContentChildrenPropertyAst, ContentChildrenPropertyAst,
    isViewChildPropertyAst, ViewChildPropertyAst,
    isViewChildrenPropertyAst, ViewChildrenPropertyAst,
    isInputPropertyAst, InputPropertyAst,
    isOutputPropertyAst, OutputPropertyAst,
    isHostBindingPropertyAst, HostBindingPropertyAst,
    isHostListenerPropertyAst, HostListenerPropertyAst,
    // constructor
    isHostConstructorAst, isSelfConstructorAst,
    isInjectConstructorAst, isOptionalConstructorAst,
    isSkipSelfConstructorAst, isAttributeConstructorAst,
    HostConstructorAst, SelfConstructorAst,
    InjectConstructorAst, OptionalConstructorAst,
    SkipSelfConstructorAst, AttributeConstructorAst, isInjectPropertyAst, InjectPropertyAst,
} from './decorators/public_api'
import { isCommandClassAst, CommandClassAst } from './cli/command'
import { isOptionPropertyAst, OptionPropertyAst } from './cli/option'
import { isItMethodAst, ItMethodAst } from './it'
import { isAddonClassAst, AddonClassAst } from './addon'
import { isControllerClassAst, ControllerClassAst } from './controller'
import { isGetMethodAst, GetMethodAst } from './http/get'
import { isPostMethodAst, PostMethodAst } from './http/post'
import * as orm from './orm';

export class NgVisitor extends NullAstVisitor {
    visitClass(ast: ClassAst, context: ParserAstContext) {
        if (isAddonClassAst(ast)) {
            return new AddonClassAst(ast, context)
        }
        if (isControllerClassAst(ast)) {
            return new ControllerClassAst(ast, context)
        }
        if (isCommandClassAst(ast)) {
            return new CommandClassAst(ast, context)
        }
        if (isComponentClassAst(ast)) {
            return new ComponentClassAst(ast, context)
        }
        if (isDirectiveClassAst(ast)) {
            return new DirectiveClassAst(ast, context)
        }
        if (isPipeClassAst(ast)) {
            return new PipeClassAst(ast, context)
        }
        if (isNgModuleClassAst(ast)) {
            return new NgModuleClassAst(ast, context)
        }
        if (isInjectableClassAst(ast)) {
            return new InjectableClassAst(ast, context)
        }
        if (isPageClassAst(ast)) {
            return new PageClassAst(ast, context)
        }
        // typeorm
        // entity
        if (orm.isEntityClassAst(ast)) {
            return new orm.EntityClassAst(ast, context)
        }
        if (orm.isChildEntityClassAst(ast)) {
            return new orm.ChildEntityClassAst(ast, context)
        }
        if (orm.isTableInheritanceClassAst(ast)) {
            return new orm.TableInheritanceClassAst(ast, context)
        }
        // tree
        if (orm.isTreeClassAst(ast)) {
            return new orm.TreeClassAst(ast, context)
        }
        // listener
        if (orm.isEventSubscriberClassAst(ast)) {
            return new orm.EventSubscriberClassAst(ast, context)
        }
        if (orm.isMigrationClassAst(ast)) {
            return new orm.MigrationClassAst(ast, context)
        }
        if (orm.isTypeormClassAst(ast)) {
            return new orm.TypeormClassAst(ast, context)
        }
    }
    visitConstructor(ast: ConstructorAst, context: ParserAstContext) {
        if (isHostConstructorAst(ast)) {
            return new HostConstructorAst(ast as any, context)
        }
        if (isSelfConstructorAst(ast)) {
            return new SelfConstructorAst(ast as any, context)
        }
        if (isInjectConstructorAst(ast)) {
            return new InjectConstructorAst(ast as any, context)
        }
        if (isOptionalConstructorAst(ast)) {
            return new OptionalConstructorAst(ast as any, context)
        }
        if (isSkipSelfConstructorAst(ast)) {
            return new SkipSelfConstructorAst(ast as any, context)
        }
        if (isAttributeConstructorAst(ast)) {
            return new AttributeConstructorAst(ast as any, context)
        }
    }
    visitProperty(ast: PropertyAst, context: ParserAstContext) {
        if (isInjectPropertyAst(ast)) {
            return new InjectPropertyAst(ast, context)
        }
        // listener
        if (orm.isAfterInsertPropertyAst(ast)) {
            return new orm.AfterInsertPropertyAst(ast, context)
        }
        if (orm.isAfterLoadPropertyAst(ast)) {
            return new orm.AfterLoadPropertyAst(ast, context)
        }
        if (orm.isAfterRemovePropertyAst(ast)) {
            return new orm.AfterRemovePropertyAst(ast, context)
        }
        if (orm.isAfterUpdatePropertyAst(ast)) {
            return new orm.AfterUpdatePropertyAst(ast, context)
        }
        if (orm.isBeforeInsertPropertyAst(ast)) {
            return new orm.BeforeInsertPropertyAst(ast, context)
        }
        if (orm.isBeforeRemovePropertyAst(ast)) {
            return new orm.BeforeRemovePropertyAst(ast, context)
        }
        if (orm.isBeforeUpdatePropertyAst(ast)) {
            return new orm.BeforeUpdatePropertyAst(ast, context)
        }
        // other
        if (orm.isEntityRepositoryPropertyAst(ast)) {
            return new orm.EntityRepositoryPropertyAst(ast, context)
        }
        if (orm.isCheckPropertyAst(ast)) {
            return new orm.CheckPropertyAst(ast, context)
        }
        if (orm.isExclusionPropertyAst(ast)) {
            return new orm.ExclusionPropertyAst(ast, context)
        }
        if (orm.isGeneratedPropertyAst(ast)) {
            return new orm.GeneratedPropertyAst(ast, context)
        }
        if (orm.isIndexPropertyAst(ast)) {
            return new orm.IndexPropertyAst(ast, context)
        }
        if (orm.isUniquePropertyAst(ast)) {
            return new orm.UniquePropertyAst(ast, context)
        }
        // column
        if (orm.isColumnPropertyAst(ast)) {
            return new orm.ColumnPropertyAst(ast, context)
        }
        if (orm.isPrimaryColumnPropertyAst(ast)) {
            return new orm.PrimaryColumnPropertyAst(ast, context)
        }
        if (orm.isCreateDateColumnPropertyAst(ast)) {
            return new orm.CreateDateColumnPropertyAst(ast, context)
        }
        if (orm.isObjectIdColumnPropertyAst(ast)) {
            return new orm.ObjectIdColumnPropertyAst(ast, context)
        }
        if (orm.isPrimaryGeneratedColumnPropertyAst(ast)) {
            return new orm.PrimaryGeneratedColumnPropertyAst(ast, context)
        }
        if (orm.isUpdateDateColumnPropertyAst(ast)) {
            return new orm.UpdateDateColumnPropertyAst(ast, context)
        }
        if (orm.isVersionColumnPropertyAst(ast)) {
            return new orm.VersionColumnPropertyAst(ast, context)
        }
        if (orm.isTreeChildrenPropertyAst(ast)) {
            return new orm.TreeChildrenPropertyAst(ast, context)
        }
        if (orm.isTreeLevelColumnPropertyAst(ast)) {
            return new orm.TreeLevelColumnPropertyAst(ast, context)
        }
        if (orm.isTreeParentPropertyAst(ast)) {
            return new orm.TreeParentPropertyAst(ast, context)
        }
        // relation
        if (orm.isJoinColumnPropertyAst(ast)) {
            return new orm.JoinColumnPropertyAst(ast, context)
        }
        if (orm.isJoinTablePropertyAst(ast)) {
            return new orm.JoinTablePropertyAst(ast, context)
        }
        if (orm.isManyToManyPropertyAst(ast)) {
            return new orm.ManyToManyPropertyAst(ast, context)
        }
        if (orm.isManyToOnePropertyAst(ast)) {
            return new orm.ManyToOnePropertyAst(ast, context)
        }
        if (orm.isOneToManyPropertyAst(ast)) {
            return new orm.OneToManyPropertyAst(ast, context)
        }
        if (orm.isOneToOnePropertyAst(ast)) {
            return new orm.OneToOnePropertyAst(ast, context)
        }
        if (orm.isRelationCountPropertyAst(ast)) {
            return new orm.RelationCountPropertyAst(ast, context)
        }
        if (orm.isRelationIdPropertyAst(ast)) {
            return new orm.RelationIdPropertyAst(ast, context)
        }
        if (isOptionPropertyAst(ast)) {
            return new OptionPropertyAst(ast, context)
        }
        if (isContentChildPropertyAst(ast)) {
            return new ContentChildPropertyAst(ast, context)
        }
        if (isContentChildrenPropertyAst(ast)) {
            return new ContentChildrenPropertyAst(ast, context)
        }
        if (isViewChildPropertyAst(ast)) {
            return new ViewChildPropertyAst(ast, context)
        }
        if (isViewChildrenPropertyAst(ast)) {
            return new ViewChildrenPropertyAst(ast, context)
        }
        if (isInputPropertyAst(ast)) {
            return new InputPropertyAst(ast, context)
        }
        if (isOutputPropertyAst(ast)) {
            return new OutputPropertyAst(ast, context)
        }
        if (isHostBindingPropertyAst(ast)) {
            return new HostBindingPropertyAst(ast, context)
        }
        if (isHostListenerPropertyAst(ast)) {
            return new HostListenerPropertyAst(ast, context)
        }
    }
    visitMethod(ast: MethodAst, context: ParserAstContext) {
        if (isItMethodAst(ast)) {
            return new ItMethodAst(ast, context)
        }
        if (isGetMethodAst(ast)) {
            return new GetMethodAst(ast, context)
        }
        if (isPostMethodAst(ast)) {
            return new PostMethodAst(ast, context)
        }
    }
}
export const visitor = new Visitors([
    new NgVisitor()
]);
