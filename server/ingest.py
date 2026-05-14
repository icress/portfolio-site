import os
from pathlib import Path
import shutil
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_chroma import Chroma


DB_NAME = str(Path(__file__).parent / "vector_db")
INFORMATION = str(Path(__file__).parent / 'info')

print('DB_NAME', DB_NAME)

embeddings = HuggingFaceEmbeddings(model_name='all-MiniLM-L6-v2')

def fetch_documents():
    documents = []
    loader = DirectoryLoader(
        INFORMATION, glob="**/*.md", loader_cls=TextLoader, loader_kwargs={"encoding": "utf-8"}
    )
    folder_docs = loader.load()
    for doc in folder_docs:
        source = doc.metadata.get('source')
        doc_type = os.path.basename(source)
        doc.metadata["doc_type"] = doc_type
        documents.append(doc)
    return documents


def create_chunks(documents):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=80)
    chunks = text_splitter.split_documents(documents)
    return chunks


def create_embeddings(chunks):
    db_path = Path(DB_NAME)
    if db_path.exists():
        shutil.rmtree(db_path)

    Chroma.from_documents(
        documents=chunks, embedding=embeddings, persist_directory=DB_NAME
    )


def ingest_data():
    documents = fetch_documents()
    chunks = create_chunks(documents)
    create_embeddings(chunks)
    print("Ingestion complete")