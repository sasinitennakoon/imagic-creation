import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContentBlocks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'contentBlocks';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface BlocksGalleryBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_blocks';
  info: {
    displayName: 'GalleryBlock';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_blocks';
  info: {
    displayName: 'ImageBlock';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote_blocks';
  info: {
    displayName: 'QuoteBlock';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface BlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface BlocksVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_video_blocks';
  info: {
    displayName: 'VideoBlock';
  };
  attributes: {
    videoUrl: Schema.Attribute.String;
  };
}

export interface ProjectHighlights extends Struct.ComponentSchema {
  collectionName: 'components_project_highlights_s';
  info: {
    displayName: 'highlights ';
    icon: 'star';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ProjectTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_project_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'message';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    authorRole: Schema.Attribute.String;
    quote: Schema.Attribute.String;
  };
}

export interface SharedGalleryBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_blocks';
  info: {
    displayName: 'gallery-block';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_heading_blocks';
  info: {
    displayName: 'heading-block';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface SharedImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_blocks';
  info: {
    displayName: 'image-block';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_quote_blocks';
  info: {
    displayName: 'quote-block';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.content-blocks': BlocksContentBlocks;
      'blocks.gallery-block': BlocksGalleryBlock;
      'blocks.image-block': BlocksImageBlock;
      'blocks.quote-block': BlocksQuoteBlock;
      'blocks.text-block': BlocksTextBlock;
      'blocks.video-block': BlocksVideoBlock;
      'project.highlights': ProjectHighlights;
      'project.testimonial': ProjectTestimonial;
      'shared.gallery-block': SharedGalleryBlock;
      'shared.heading-block': SharedHeadingBlock;
      'shared.image-block': SharedImageBlock;
      'shared.quote-block': SharedQuoteBlock;
      'shared.rich-text': SharedRichText;
    }
  }
}
