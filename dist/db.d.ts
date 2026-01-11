import mongoose, { Schema, Document, Model } from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    username?: string | null;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        password?: string | null;
        username?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        password?: string | null;
        username?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const User: mongoose.Model<{
    password?: string | null;
    username?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    username?: string | null;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        password?: string | null;
        username?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        password?: string | null;
        username?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface IContent extends Document {
    title: string;
    link?: string;
    type: 'link' | 'note' | 'bookmark';
    userId: Schema.Types.ObjectId;
    tags: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const ContentSchema: mongoose.Schema<IContent, mongoose.Model<IContent, any, any, any, (mongoose.Document<unknown, any, IContent, any, mongoose.DefaultSchemaOptions> & IContent & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, IContent, any, mongoose.DefaultSchemaOptions> & IContent & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}), any, IContent>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IContent, mongoose.Document<unknown, {}, IContent, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    type?: mongoose.SchemaDefinitionProperty<"link" | "note" | "bookmark", IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    link?: mongoose.SchemaDefinitionProperty<string | undefined, IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    title?: mongoose.SchemaDefinitionProperty<string, IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: mongoose.SchemaDefinitionProperty<Schema.Types.ObjectId, IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    tags?: mongoose.SchemaDefinitionProperty<Schema.Types.ObjectId[], IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date, IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date, IContent, mongoose.Document<unknown, {}, IContent, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IContent & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IContent>;
export declare const Content: Model<IContent>;
//# sourceMappingURL=db.d.ts.map